
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/11 12:22:40
     * @description close-remind 图标组件
     * @file icon-close-remind.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-close-remind',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconCloseRemind {
        
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
                    <path d="M42 38s-6-5-6-19c0-6.627-5.373-12-12-12-2.54 0-4.896.79-6.835 2.136M30 38H6s5.57-4.641 5.976-17.5" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M18 38h12a6 6 0 0 1-12 0Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M24 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="m7 6.5 34 38" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    