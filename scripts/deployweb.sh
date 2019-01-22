#!/bin/sh

# This script can be used to deploy your website from
# the dist/ directory directly to your hosting service
# if you have an ftp account set up.
#
# Customise before use as follows.
#
# From the root directory of this project:
#   chmod +x scripts/deployweb.sh
#   copy scripts/ncftp.config to scripts/rsdemo.ncftp
#   edit scripts/rsdemo.ncftp with ftp host and account login
#   chmod 600 scripts/ # to protect credentials
#   modify the source and destination paths below
#   ./scripts/deployweb.sh

SOURCE='./dist/*'  # Directory holding production website
DESTINATION='/'   # Upload directory on ftp account

yarn build
echo FTP upload...
ncftpput -R -f scripts/rsdemo.ncftp $DESTINATION $SOURCE
