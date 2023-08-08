
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/8 17:37:16
     * @description weibo-filled 图标组件
     * @file icon-weibo-filled.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-weibo-filled',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconWeiboFilled {
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
                    <path d="M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522 5.2 6.785 19.92 4.168 25.997-.613 6.077-4.78 5.477-7.734 4.16-9.036-1.318-1.301-5.163.014-6.24-1.757-1.076-1.77 1.917-6.195-.634-7.595-2.55-1.4-6.954 3.65-8.944 2.338-1.989-1.312 2.19-5.596 0-6.83-2.189-1.235-5.795.722-9.14 3.972Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M43.379 16.516a12.954 12.954 0 0 0-3.642-8.073 12.963 12.963 0 0 0-7.723-3.84m5.278 12.328c-.13-1.64-.867-3.117-2-4.228a7.249 7.249 0 0 0-4.24-2.01" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    