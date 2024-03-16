#!/usr/bin/env bash

git checkout main &&
git pull &&
git branch -D release &&
git checkout -b release &&
rm README.md &&
rm deps.edn &&
rm -r node_modules &&
rm package.json &&
rm -r src &&
rm shadow-cljs.edn &&
rm yarn.lock &&
mv resources/public/index.html index.html &&
mv resources/public/js js &&
rm -r resources &&
git push --force-with-lease origin release
