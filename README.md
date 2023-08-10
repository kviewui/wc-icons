# 该仓库是统一生产管理各个框架环境的图标组件资源的仓库

## packages项目说明
+ `icons-svg`：svg 图标资源目录
+ `wc-icons`：`wc-ui组件库` 专属图标组件库
+ `icons-svg-symbol`: `icons-svg` 目录所有 svg 合并后的资源目录

## svg 图标资源说明
所有 svg 图标资源都需要放到 `packages/icons-svg` 项目包中，图标文件名字需要遵循下面的规则：
+ 文件名必须全英文
+ 文件名不能有特殊符号
+ 文件名中间可以有"-"连字符

## 图标组件生成说明
**WC 图标组件生成**
```shell
npm run gen:wc
```

## symbol格式svg 生成说明
```shell
npm run gen:sprite
```