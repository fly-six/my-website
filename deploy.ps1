# 构建
npm run build

# 进入构建文件夹
Set-Location dist

# 初始化git
git init
git add -A
git commit -m "deploy"

# 推送到gh-pages分支
git push -f git@github.com:<fly-six>/XXguanwang.git master:gh-pages

# 返回上级目录
Set-Location .. 