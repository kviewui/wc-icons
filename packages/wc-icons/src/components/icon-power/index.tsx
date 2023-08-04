
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/4 14:58:42
     * @description power 图标组件
     * @file icon-power.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-power',
        shadow: true,
    })
    export class IconPower {
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
                    <path d="M14.5 8a19.05 19.05 0 0 0-4.75 3.84C6.794 15.146 5 19.49 5 24.245 5 34.603 13.507 43 24 43s19-8.397 19-18.755c0-4.756-1.794-9.099-4.75-12.405A19.02 19.02 0 0 0 33.5 8M24 4v20" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    