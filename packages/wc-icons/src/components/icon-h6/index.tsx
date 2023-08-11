
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/11 12:22:40
     * @description h6 图标组件
     * @file icon-h6.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-h6',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconH6 {
        
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
                <svg width={this.size} height={this.size} viewBox="0 0 48 48" style={this.getStyle()} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8v32M24 8v32M7 24h16" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M36.5 40a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M41.596 24.74C40.778 22.545 38.804 21 36.5 21c-3.038 0-5.5 2.686-5.5 6v7" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    