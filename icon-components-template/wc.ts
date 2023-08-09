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
        styleUrl: '../../styles/index.css'
    })
    export class Icon${capitalize(filename)} {
        /**
         * 图标大小
         */
        @Prop() size: number = 16;

        /**
         * 图标颜色
         */
        @Prop() color: string = '#333';

        /**
         * 图标线条宽度
         */
        @Prop() strokeWidth: number = 4;
        
        /**
         * 图标填充颜色
         */
        @Prop() fill: string = 'none';

        /**
         * 图标端点样式, 可选值: butt, round, square, inherit 默认值: round
         */
        @Prop() strokeLinecap: 'butt' | 'round' | 'square' | 'inherit' = 'round';

        /**
         * 图标拐角样式, 可选值: arcs, bever, miter, miter-clip, round, 默认值: round
         */
        @Prop() strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' = 'round';
        
        /**
         * 图标旋转角度
         */
        @Prop() rotate: number = 0;

        /**
         * 图标是否旋转
         * + 为true时，图标将会做旋转动画
         */
        @Prop() spin: boolean = false;

        /**
         * 动画时间
         * + 单位: 秒
         * + 默认值: 1
         * + 仅当 spin 为 true 时有效
         */
        @Prop() duration: number = 1; 

        /**
         * 获取图标样式
         */
        getStyle() {
            return {
                transform: 'rotate(' + this.rotate + 'deg)',
                animation: this.spin ? 'spin ' + this.duration + 's linear infinite' : 'none'
            };
        }

        render() {
            return (<Fragment>
                <svg width={this.size} height={this.size} viewBox="${viewBox}" style={this.getStyle()} fill="none" xmlns="http://www.w3.org/2000/svg">
                    ${pathds.map((d) => {
                        return `<path d="${d}" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>`;
                    })}
                </svg>
            </Fragment>);
        }
    }
    `;
    return template;
};
