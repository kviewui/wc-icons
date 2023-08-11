import glob from "glob";
import { parse } from "svg-parser";
import { optimize } from "svgo";
import { outputFileSync, readFileSync } from "fs-extra";
import consola from "consola";
import {
  getWcIconComponentTemplate,
  getWcIconsComponentTemplate,
} from "../icon-components-template/wc";

let svgFiles = `${process.cwd()}/packages/icons-svg/*.svg`;

const loopFiles = (files: any) => {
  return new Promise(async (resolve) => {
    let entryArray: string[] = [];

    for (let i = 0; i < files.length; i++) {
      // 获取文件名
      const filename = files[i].split("/").pop()?.split(".")[0];
      if (!filename) {
        consola.error("文件名获取失败");
        return;
      }

      consola.info(`正在处理图标 ${filename}...`);

      entryArray.push(filename);
      const data = readFileSync(files[i], "utf-8");
      let g = optimize(data).data;
      // 解析svg
      const ast: any = parse(g).children[0];
      // 获取svg 的 path
      const pathds = ast.children.map((item: any) => item.properties.d);
      // 获取viewBox
      const viewBox = ast.properties?.viewBox;

      try {
        outputFileSync(
          `${process.cwd()}/packages/wc-icons/src/components/icon-${filename}/index.tsx`,
          getWcIconComponentTemplate(filename, pathds, viewBox),
          "utf-8"
        );
      } catch (e) {
        consola.error(e);
      }

      consola.success(`icon-${filename} 图标组件生成成功`);
    }

    resolve(entryArray);
  });
};

const buildWcIconComponent = () => {
  return new Promise((resolve) => {
    new glob.Glob(svgFiles, {}, async (err, files) => {
      if (err) {
        consola.error(err);
        return;
      }

      const result = await loopFiles(files);

      resolve(result);
    });
  });
};

buildWcIconComponent().then(() => {
  consola.info(`开始生成 svg 全量图标组件...`);

  outputFileSync(
    `${process.cwd()}/packages/wc-icons/src/components/icons/index.tsx`,
    getWcIconsComponentTemplate(),
    "utf-8"
  );

  consola.success(`svg 全量图标组件生成成功`);
});
