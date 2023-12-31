
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/11 12:22:40
     * @description toutiao 图标组件
     * @file icon-toutiao.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-toutiao',
        shadow: true,
        styleUrl: '../../styles/index.css'
    })
    export class IconToutiao {
        
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
                    <path d="M36.883 44h-25.77C7.192 44 4 40.808 4 36.883v-25.77C4 7.192 7.192 4 11.113 4h25.77c3.92 0 7.113 3.192 7.113 7.113v25.77C44 40.808 40.808 44 36.883 44ZM11.113 4.303a6.819 6.819 0 0 0-6.81 6.81v25.77a6.82 6.82 0 0 0 6.814 6.814h25.77a6.82 6.82 0 0 0 6.815-6.814v-25.77a6.82 6.82 0 0 0-6.815-6.815H11.113v.005Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="m4 36.887 40-2.092V11.113L4 13.205v23.682Zm20.963-18.334s.933.678 1.035.746c.667.459 1.548 1.065 2.917 1.694-1.26.386-2.709.768-4.382 1.136v2.314c3.191-.686 5.692-1.463 7.667-2.251 1.95.564 4.472 1.079 7.781 1.446v-2.314a51.852 51.852 0 0 1-4.474-.702 17.45 17.45 0 0 0 3.614-2.682v-.354h.004v-2.169h-.004l-.525.028-8.974.47-2.324-.963-2.335 3.601Zm3.547-.412 7.475-.39c-.82.598-1.978 1.304-3.715 2.038-1.73-.552-2.902-1.136-3.76-1.648Zm-11.798-2.093 2.459-.128c-.062 4.621-.148 7.388-.82 9.557l5.095-.267v2.17l-6.107.318c-.976 1.569-2.493 3.046-4.867 5.14l-3.874.205c.144-.122.281-.241.416-.358l.074-.064c2.388-2.07 4.03-3.494 5.142-4.76l-6.228.324V26.02l7.718-.405c.86-1.97.928-4.717.992-9.567Zm-1.81 1.419v2.42L9.43 19.39v-2.417l5.472.495ZM9.43 21.064v2.42l5.472.499v-2.42l-5.472-.5Zm21.552 5.922-6.449.338v-2.17l6.45-.337v-1.235l2.518-.128v1.23l6.48-.339v2.17l-6.48.34v4.888l-2.519.132v-4.889ZM21.06 28.59l-2.97.153 2.386 3.682 2.97-.153-2.386-3.682Zm13.587-.712 2.966-.154 2.386 3.682-2.966.154-2.386-3.682Zm-4.75.247-2.97.158-2.386 3.929 2.97-.154 2.387-3.933Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    