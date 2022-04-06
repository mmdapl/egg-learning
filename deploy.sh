#!/usr/bin/env sh
###
 # @Description: 构建脚本
 # @Version: Beta1.0
 # @Author: 【B站&公众号】Rong姐姐好可爱
 # @Date: 2021-01-10 19:04:21
 # @LastEditors: 【B站&公众号】Rong姐姐好可爱
 # @LastEditTime: 2022-04-06 22:48:44
### 

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -