
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/11 12:22:40
     * @description play-cycle 图标组件
     * @file icon-play-cycle.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-play-cycle',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconPlayCycle {
        
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
                    <path d="M4 25c0-6.65 5.396-12 12-12h28" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="m38 7 6 6-6 6m6 4c0 6.65-5.396 12-12 12H4" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="m10 41-6-6 6-6" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    