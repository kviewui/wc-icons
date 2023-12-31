
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/11 12:22:40
     * @description taobao-circle 图标组件
     * @file icon-taobao-circle.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-taobao-circle',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconTaobaoCircle {
        
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
                    <path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0Zm0 4.364C13.155 4.364 4.364 13.155 4.364 24c0 10.845 8.791 19.636 19.636 19.636 10.845 0 19.636-8.791 19.636-19.636 0-10.845-8.791-19.636-19.636-19.636Zm-4.873 7.254 3.636.745c-.1.7-.336 1.491-.709 2.375a22.066 22.066 0 0 1 3.412-.946c2.387-.447 4.242-.701 6.081-.701 1.84 0 3.254.019 5.05 1.435 1.116.882 1.803 2.041 2.06 3.479l.049.312V30.99c0 .846-.226 1.72-.677 2.62-.423.845-1.236 1.322-2.44 1.432l-.247.017h-7.54c-.482-1.409-.482-2.24 0-2.495.724-.382 3.503.642 4.724 0 .76-.4 1.146-1.145 1.16-2.233l-.003-.239v-11.96c0-1.853-1.133-3.133-4.625-2.943-1.896.103-4.108.574-6.639 1.412l.822.25.992.338v.325c0 .552.41 1.01.944 1.082l.125.009 7.298.14v2.01h-5.455v2.498H32.6v1.553h-5.515l.06 4.874a2.88 2.88 0 0 0 1.521-.314 1.86 1.86 0 0 0 .787-.724l-.364-.72-.001-.002a1.09 1.09 0 0 1 .373-1.401l.11-.064 1.254-.631a1.091 1.091 0 0 1 1.482.52l.046.118.743 2.294a1.09 1.09 0 0 1-.398 1.22l-.109.07-.9.5a1.091 1.091 0 0 1-1.44-.35l-.064-.11-.014-.023c-.552.599-1.074 1.058-1.568 1.377-.816.528-1.697.958-2.713 1.027l-.28.009h-5.255c-.426 0-1.198-.277-1.992-1.036-.485-.464-.78-1.188-.884-2.172l-.024-.275v-2.741h4.156c.033 1.185.144 2.1.333 2.741.176.6.642.839 1.398.718l.167-.031v-4.874h-6.055v-1.553h6.055v-2.499H22.35l-1.835 2.296-1.999-1.264c1.23-1.385 1.981-2.282 2.255-2.691.275-.41.275-1.114 0-2.114l.047.182-.041.017c-.708 1.07-1.645 2.107-2.812 3.11l-.383.323-2.506-2.476c1.14-.887 1.976-1.71 2.506-2.473.53-.762 1.044-2.11 1.544-4.046Zm-7.695 6.17 3.576 3.362a4.364 4.364 0 0 1 1.085 4.745l-.089.214-3.71 8.308-4.087-2.84 5.202-5.51a2.182 2.182 0 0 0-.181-3.166l-.142-.11-3.714-2.638 2.06-2.365Zm2.204-6.879a2.727 2.727 0 1 1 0 5.455 2.727 2.727 0 0 1 0-5.455Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    