import { capitalize } from "../scripts/utils";

/**
 * 生成WC图标组件
 * @param filename - 文件名
 * @param pathds - pathd 数组
 * @param viewBox - viewBox
 * @returns WC图标组件模板
 * @example
 * ```
 * getWcIconComponentTemplate('foo', ['M0 0h24v24H0V0z'], '0 0 24 24');
 * ```
 */
export const getWcIconComponentTemplate = (
  filename: string,
  pathds: string[],
  viewBox: string
) => {
    const template = `
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created ${new Date().toLocaleString()}
     * @description ${filename} 图标组件
     * @file icon-${filename}.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-${filename}',
        shadow: true,
    })
    export class Icon${capitalize(filename)} {
        /**
         * 图标大小
         */
        @Prop() size: number = 24;

        /**
         * 图标颜色
         */
        @Prop() color: string = '#333';

        /**
         * 图标线条宽度
         */
        @Prop() strokeWidth: number = 4; 

        render() {
            return (<Fragment>
                <svg width={this.size} height={this.size} viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ${pathds.map((d) => {
                        return `<path d="${d}" fill="none" stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin="round" fill-opacity="0.9"></path>`;
                    })}
                </svg>
            </Fragment>);
        }
    }
    `;
    return template;
};
