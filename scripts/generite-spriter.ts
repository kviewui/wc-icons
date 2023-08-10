// 引入 svg-sprite 模块
import svgSpriter from 'svg-sprite';
import glob from 'glob';
import fs from 'fs-extra';
import consola from "consola";

// 创建 svg-sprite 实例
const spriter = new svgSpriter({
    // 配置
    dest: 'packages/icons-svg-symbol', // 输出目录
    mode: {
        symbol: {
            dest: './', // 输出模式为 symbol
            sprite: 'sprite.symbol.svg', // 生成的文件名
            example: true // 生成 html 示例文件
        }
    },
    shape: {
        transform: [
            'svgo', // 使用 svgo 插件优化 svg
        ]
    }
});

const Glob = require('glob').Glob;

let svgFiles = `${process.cwd()}/packages/icons-svg/*.svg`;

new Glob(svgFiles, {}, async (err: any, files: any) => {
    if (err) {
        console.error(err, 'error');
        return;
    }

    files.forEach(async (filepath: string) => {
        if (!filepath) {
            console.error('svg文件获取失败');
            return;
        }
        spriter.add(filepath, null, fs.readFileSync(filepath, { encoding: 'utf-8' }));
    });

    consola.start(`开始合并svg为 symbol 模式...`);

    spriter.compile((err: any, result: any) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(result);
        consola.success(`svg 编译完成`);
        // 遍历结果对象，将生成的文件写入磁盘
        for (const mode in result) {
            for (const resource in result[mode]) {
                const { path, contents } = result[mode][resource];
                fs.writeFileSync(path, contents);
            }
        }
        consola.success(`svg 合并完成`);
    });
});