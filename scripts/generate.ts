import glob from "glob";
import { parse } from "svg-parser";
import { optimize } from "svgo";
import { outputFile, readFile } from "fs-extra";
import consola from "consola";
import { getWcIconComponentTemplate } from '../icon-components-template/wc';

let svgFiles = `${process.cwd()}/packages/icons-svg/*.svg`;

new glob.Glob(svgFiles, {}, async (err, files) => {
  if (err) {
    consola.error(err);
    return;
  }

  let entryArray: string[] = [];

  files.forEach(async (filepath) => {
    // 获取文件名
    const filename = filepath.split("/").pop()?.split(".")[0];
    if (!filename) {
      consola.error("文件名获取失败");
      return;
    }

    consola.info(`正在处理图标 ${filename}...`);

    entryArray.push(filename);
    readFile(filepath, "utf-8").then((data) => {
      let g = optimize(data).data;
      // 解析svg
      const ast: any = parse(g).children[0];
      // 获取svg 的 path
      const pathds = ast.children.map((item: any) => item.properties.d);
      // 获取viewBox
      const viewBox = ast.properties?.viewBox;

      outputFile(`${process.cwd()}/packages/wc-icons/src/components/icon-${filename}/index.tsx`, getWcIconComponentTemplate(filename, pathds, viewBox), 'utf-8', (err) => {
        if (err) {
          consola.error(err);
          return;
        }
        consola.success(`icon-${filename} 图标组件生成成功`);
      });
    });
  });
});
