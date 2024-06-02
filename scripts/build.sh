#!/usr/bin/env bash
set -e

SCRIPT_DIR=$(cd ${0%/*} && pwd -P)

#ANSI Color codes
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Known variables
SRC='./src'
PWD=$(pwd)
DST='./dist'
name="aether.ui"
input="${SRC}/index.ts"
esbuild_flags=()
clean_build=false
link_package=false

#Exclude --clean-build flag from esbuild flags
for arg in "$@"; do
  echo -e "${GREEN} ${arg} ${NC}"
  if [ "$arg" == "--clean-build" ]; then
    # Include other flags
    clean_build=true
  elif [ "$arg" == "link" ]; then
    # Copy package.json for linking purposes
    link_package=true
  else
    esbuild_flags+=("$arg")
  fi
done

#clean previous build
if [ "$clean_build" == true ]; then
  bash $SCRIPT_DIR/clean-build.sh
fi

# Find executables
resolver="${SCRIPT_DIR}/resolve-files.js"
rewriteImports="${SCRIPT_DIR}/rewrite-imports.js"

# Setup shared options for esbuild
sharedOptions=()
sharedOptions+=("--platform=browser")
sharedOptions+=("--target=es2019")

# Generate actual builds
# ESM
resolverOptions=()
resolverOptions+=($SRC)
resolverOptions+=('/**/*.{ts,tsx}')
resolverOptions+=('--ignore=.test.,__mocks__')
INPUT_FILES=$($resolver ${resolverOptions[@]})

NODE_ENV=production  npx esbuild $INPUT_FILES --format=esm --outdir=$DST               --outbase=$SRC --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions[@]} &
NODE_ENV=production  npx esbuild $input       --format=esm --outfile=$DST/$name.esm.js --outbase=$SRC --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions[@]} &

# Common JS
NODE_ENV=production  npx esbuild $input --format=cjs --outfile=$DST/$name.prod.cjs --minify --loader:.ttf=file --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions[@]} $esbuild_flags &
NODE_ENV=development npx esbuild $input --format=cjs --outfile=$DST/$name.dev.cjs           --loader:.ttf=file --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="true" ${sharedOptions[@]} $esbuild_flags &

# Generate ESM types
tsc --emitDeclarationOnly --outDir $DST &

wait

# Generate CJS types
# This is a bit of a hack, but it works because the same output works for both
cp $DST/index.d.ts $DST/index.d.cts

# Copy pre-build files over
cp -rf ./pre-build/* $DST/

# Copy assets files over
cp -R -p ./$SRC/assets $DST

# Copy package.json to $DST for linking
if [ "$link_package" == true ]; then
  echo -e "${GREEN}Copying package.json as link is defined!${NC}"
  cp $PWD/package.json $DST/package.json
fi

# Wait for all the scripts to finish
wait

# Rewrite ESM imports 😤
$rewriteImports "$DST" '/**/*.js'
$rewriteImports "$DST" '/**/*.d.ts'

# Remove test related files
rm -rf `$resolver "$DST" '/**/*.{test,__mocks__,}.*'`
rm -rf `$resolver "$DST" '/**/test-utils/*'`
