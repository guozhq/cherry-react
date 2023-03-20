#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@github.com:guozhq/cherry-react-preview.git
git push -f origin main:main
cd -