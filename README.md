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

## svg 图标批量处理说明
### 介绍
把 `packages/icons-svg` 包中的图标通过脚本批量去除固定样式属性，方便通过全量图标组件调整图标颜色以及大小等。

### 执行命令
```shell
npm run gen:svg
```

## 图标组件生成说明
**WC 图标组件生成**
```shell
npm run gen:wc
```

**WC 图标组件单个按需引入使用**
```html
<icon-add-circle />
```

**WC 图标组件全量引入使用**
```html
<wc-icons name="add-circle" />
```

## symbol格式svg 生成说明
```shell
npm run gen:sprite
```