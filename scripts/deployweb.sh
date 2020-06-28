#!/bin/bash

# This script can be used to deploy your website from
# the dist/ directory directly to a website hosting service
# if you have an ftp account set up, and to SAFE Network
# alpha2 (via SAFE Drive) or Fleming (via SAFE CLI).
#
# Customise before use as follows.
#
# From the root directory of this project:
#   customise the section "Deployment targets..." section below
#   chmod +x scripts/deployweb.sh
#   copy scripts/ncftp.config to scripts/dweb.ncftp
#   edit scripts/dweb.ncftp with ftp host and account login
#   chmod 600 scripts/ # to protect credentials
#   run from the dweb root directory using ./scripts/deployweb.sh

set -e  # Exit on error
set +v  # Don't echo output

# Deployment source and destination targets:
#
SOURCE='./dist'  # Directory holding production website
#
# Note: for the SAFE_CLI_URI setting to work you must have already
# uploaded the first version of the website to the given safe:// URI
# manually using SAFE CLI commands. After that this script can be run
# to update the live website with any changes.
#
# You can set the FTP destination directory below.
# You can deploy to SAFE via one or both of SAFE Drive of the SAFE CLI.
# Comment out a setting blank to disable a deployment destination
#
DEPLOY_VIA_FTP='/'   # Upload directory on ftp account
# DEPLOY_VIA_SAFE_DRIVE_DIR=~/SAFE/_public/tests/data1/dweb
# DEPLOY_VIA_SAFE_DRIVE_DIR_MOCK=~/SAFE/_public/tests/data1/dweb
DEPLOY_VIA_SAFE_CLI_URI=safe://dweb

yarn build

###################################################################
# Deploy to the ordinary web using FTP
if [ "$DEPLOY_VIA_FTP" != "" ]; then
  echo Uploading via FTP...
  ncftpput -R -f scripts/dweb.ncftp $DEPLOY_VIA_FTP $SOURCE/*
fi

###################################################################
# Deploy via SAFE CLI to an existing SAFE Network public name (website)
if [ "$DEPLOY_VIA_SAFE_CLI_URI" != "" ]; then
  echo "Ensure SAFE Authenticator Daemon is running and you have authorised SAFE CLI with 'safe auth'"
  read -p "Then press ENTER to sync..."
  echo "Syncing via SAFE CLI..."
	safe files sync -r ./dist/ $DEPLOY_VIA_SAFE_CLI_URI -u -d
fi

###################################################################
# Deploy via SAFE Drive to an existing SAFE Network public name (website)
if [ "$DEPLOY_VIA_SAFE_DRIVE" != "" ]; then
  read -p "Mount SAFE Drive and press ENTER to sync..."
  if [ "$1" == "mock" ]; then
    DEPLOY_VIA_SAFE_DRIVE_DIR=$DEPLOY_VIA_SAFE_DRIVE_DIR_MOCK
    mkdir -p $DEPLOY_VIA_SAFE_DRIVE_DIR
  fi

  read -p "Mount SAFE Drive and press ENTER to sync..."
  echo Syncing via SAFE Drive...
  UPLOAD=$SOURCE-upload
  rsync -rc --delete $SOURCE/ $UPLOAD/ && \
  cp -ruv $UPLOAD/* $DEPLOY_VIA_SAFE_DRIVE_DIR/ && \
  rsync -ru --delete $UPLOAD/ $DEPLOY_VIA_SAFE_DRIVE_DIR/
fi
