#!/usr/bin/env sh

set -e

npm run build

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:pacificfrost/pacificfrost.github.io.git master:gh-pages

cd -
