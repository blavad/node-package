# Version key/value should be on his own line
PACKAGE_VERSION=$(cat package.json \
  | grep packageModuleName \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo $PACKAGE_VERSION