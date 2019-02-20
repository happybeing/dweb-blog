#!/bin/bash

# This script can be used to deploy your website from
# the dist/ directory directly to your hosting service
# if you have an ftp account set up.
#
# Customise before use as follows.
#
# From the root directory of this project:
#   chmod +x scripts/deployweb.sh
#   copy scripts/ncftp.config to scripts/dweb.ncftp
#   edit scripts/dweb.ncftp with ftp host and account login
#   chmod 600 scripts/ # to protect credentials
#   modify the source and destination paths below
#   ./scripts/deployweb.sh

set -e  # Exit on error
set +v  # Don't echo output
SOURCE='./dist'  # Directory holding production website
FTP_DIR='/'   # Upload directory on ftp account

yarn build
echo FTP upload...
ncftpput -R -f scripts/dweb.ncftp $FTP_DIR $SOURCE/*

#exit 0  # Remove this line to enable deploy to SAFE Network
# Deploy via SAFE Drive to an existing SAFE Network public name (website)
SAFE_DIR=~/SAFE/_public/dweb/root-www
if [ "$1" == "mock" ]; then
  SAFE_DIR=~/SAFE/_public/tests/data1/dweb
  mkdir -p $SAFE_DIR
fi

read -p "Mount SAFE Drive and press ENTER to sync..."
echo Syncing via SAFE Drive...
UPLOAD=$SOURCE-upload
rsync -rc --delete $SOURCE/ $UPLOAD/ && \
cp -ruv $UPLOAD/* $SAFE_DIR/ && \
rsync -ru --delete $UPLOAD/ $SAFE_DIR/
