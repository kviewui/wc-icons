
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/4 14:58:42
     * @description alipay 图标组件
     * @file icon-alipay.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-alipay',
        shadow: true,
    })
    export class IconAlipay {
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
                    <path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0Zm0 4.364C13.155 4.364 4.364 13.155 4.364 24c0 10.845 8.791 19.636 19.636 19.636 6.738 0 12.683-3.393 16.22-8.565a64.056 64.056 0 0 1-6.683-2.402c-1.237-.52-3.084-1.34-5.541-2.459-2.94 2.963-7.227 5.79-11.822 5.79-3.188-.016-8.538-1.627-8.538-6.654s4.956-6.224 8.172-6.224c1.945 0 5.39 1.074 10.33 3.222l.077.03c1.326-1.623 2.236-3.507 2.73-5.653l.1-.464h-12.87v-2.32h5.857v-2.9h-8.201v-1.74h8.201l.001-3.479h4.687v3.48h9.374v1.74H26.72v2.899h7.486c-.11.724-.234 1.382-.371 1.973l-.084.347c-.345 1.245-1.12 3.06-2.325 5.442-.32.632-.782 1.364-1.366 2.139 1.844.683 3.711 1.346 5.6 1.99 2.447.832 4.562 1.506 6.345 2.02A19.57 19.57 0 0 0 43.636 24c0-10.845-8.791-19.636-19.636-19.636Zm-13.685 24.18c0 3.198 6.69 4.472 12.11 1.106a17 17 0 0 0 1.71-1.213l-.018-.008-.427-.262c-3.382-2.058-6.01-3.174-7.882-3.348-1.719-.159-5.493.527-5.493 3.725Zm18.73-8.287h2.209-2.209Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    