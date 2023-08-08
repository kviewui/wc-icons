
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/8 17:37:16
     * @description camera-filled 图标组件
     * @file icon-camera-filled.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-camera-filled',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconCameraFilled {
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
         * 获取图标样式
         */
        getStyle() {
            return {
                transform: 'rotate(' + this.rotate + 'deg)',
                animation: this.spin ? 'spin 1.5s linear infinite' : ''
            };
        }

        render() {
            return (<Fragment>
                <svg width={this.size} height={this.size} viewBox="0 0 48 48" style={this.getStyle()} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15 12 3-6h12l3 6H15Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="undefined" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M24 35a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    