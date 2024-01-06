#!/usr/bin/env bash
set -e

SCRIPT_DIR=$(cd ${0%/*} && pwd -P)


# Known variables
SRC='./src'
DST='./dist'
name="aether.ui"
input="${SRC}/index.ts"
esbuild_flags=()
clean_build=false

#Exclude --clean-build flag from esbuild flags
for arg in "$@"; do
  if [ "$arg" != "--clean-build" ]; then
    # Include other flags
    esbuild_flags+=("$arg")
  else
    clean_build=true
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
NODE_ENV=production  npx esbuild $input --format=cjs --outfile=$DST/$name.prod.cjs --minify --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions[@]} $esbuild_flags &
NODE_ENV=development npx esbuild $input --format=cjs --outfile=$DST/$name.dev.cjs           --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="true" ${sharedOptions[@]} $esbuild_flags &

# Generate ESM types
tsc --emitDeclarationOnly --outDir $DST &

wait

# Generate CJS types
# This is a bit of a hack, but it works because the same output works for both
cp $DST/index.d.ts $DST/index.d.cts

# Copy pre-build files over
cp -rf ./pre-build/* $DST/

# Wait for all the scripts to finish
wait

# Rewrite ESM imports 😤
$rewriteImports "$DST" '/**/*.js'
$rewriteImports "$DST" '/**/*.d.ts'

# Remove test related files
rm -rf `$resolver "$DST" '/**/*.{test,__mocks__,}.*'`
rm -rf `$resolver "$DST" '/**/test-utils/*'`
