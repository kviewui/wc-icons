// 引入 svg-sprite 模块
const svgSpriter = require('svg-sprite');

// 创建 spriter 对象
const spriter = new svgSpriter({
    // 配置
    dest: './out', // 输出目录
    mode: {
        css: { // 生成 CSS 文件
            render: {
                css: true // 开启 CSS 渲染
            }
        },
        symbol: {
            dest: './', // 输出目录
            sprite: 'sprite.symbol.svg', // 生成的文件名
            example: true // 生成示例 HTML
        }
    }
});

const Glob = require('glob').Glob;

// 匹配需要合并的 svg 文件
const files = new Glob('**/*.svg', {
    cwd: '../packages/icons-svg', // 搜索 svg 文件的目录
    sync: true // 这里不能异步，只能同步
}).found;

// 遍历所有 svg 文件
files.forEach(file => {
    console.log(file);
    // 添加一个需要合并的 svg
    // spriter.add(
    //     new Glob(file, {
    //         cwd: './src/svg',
    //         sync: true
    //     }).found[0],
    //     null,
    //     fs.readFileSync('./src/svg/' + file, { encoding: 'utf-8' })
    // );
});