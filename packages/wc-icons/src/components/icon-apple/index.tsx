
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/9 10:50:24
     * @description apple 图标组件
     * @file icon-apple.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-apple',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconApple {
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
                    <path d="M23.911 11.318c.082-2.232.71-4.192 1.866-5.83 1.163-1.647 3.086-2.817 5.717-3.48l.055.243v.424c0 .961-.233 2.064-.693 3.276-.483 1.174-1.237 2.28-2.238 3.277-.936.879-1.803 1.46-2.569 1.723-.252.076-.599.15-1.018.217-.372.058-.745.108-1.12.15Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M24.35 14.629c-2.973 0-5.036-2.63-7.969-2.63-2.932 0-8.973 2.696-8.973 12 0 9.306 5.365 15.3 5.965 16 .6.701 1.987 2.5 4.137 2.5 2.15 0 4.503-1.709 6.84-1.709 2.337 0 5.279 1.71 7.2 1.71 1.92 0 2.71-.783 4.016-2.134 1.307-1.35 3.8-5.47 4.67-7.944-1.433-.854-5.234-3.17-5.234-8.422 0-3.5 1.28-6.41 3.838-8.725C37.161 13.092 35.215 12 33 12c-3.323 0-5.677 2.629-8.65 2.629Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    