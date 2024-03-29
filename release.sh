#!/usr/bin/env bash

git checkout main &&
git pull &&
git branch -D release &&
git checkout -b release &&
rm README.md &&
rm deps.edn &&
rm package.json &&
rm -r src &&
rm shadow-cljs.edn &&
rm yarn.lock &&
rm release.sh &&
rm .gitignore &&
mv resources/public/index.html index.html &&
mv resources/public/js js &&
rm -r resources &&
git add . && 
git commit -m "release" &&
git push --force-with-lease origin release
