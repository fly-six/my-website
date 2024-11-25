const { exec } = require('child_process');
const path = require('path');

const commands = [
    'npm run build',
    'cd dist',
    'git init',
    'git add -A',
    'git commit -m "deploy"',
    'git push -f git@github.com:<USERNAME>/XXguanwang.git master:gh-pages',
    'cd ..'
].join(' && ');

exec(commands, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行错误: ${error}`);
        return;
    }
    console.log(`输出: ${stdout}`);
    if (stderr) {
        console.error(`错误: ${stderr}`);
    }
}); 