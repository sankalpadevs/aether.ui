#!/bin/bash

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Default folder
folder_to_clean="./dist"

# Check if the folder exists
if [ -d "$folder_to_clean" ]; then
    echo -e "${GREEN}Cleaning build...${NC}"

    # Delete the folder
    rm -rf "$folder_to_clean"

    echo -e "${GREEN}Build cleaned successfully.${NC}"
else
    echo -e "${RED}The folder $folder_to_clean does not exist. Nothing to clean.${NC}"
fi