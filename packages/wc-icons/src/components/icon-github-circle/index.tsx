
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/4 14:58:42
     * @description github-circle 图标组件
     * @file icon-github-circle.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-github-circle',
        shadow: true,
    })
    export class IconGithubCircle {
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
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674-2.072.072-3.38-.072-3.927-.431-.819-.539-1.64-2.2-2.367-3.371-.728-1.17-2.343-1.356-2.995-1.618-.652-.261-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.825.514 2.796.29 3.689-.122.893-.412.827-1.944.987-2.551.201-.567-.509-.693-.524-.697-.873 0-5.454-.997-6.713-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.365.46 5.703 2.326.002.01 1.756-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.76.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.314.626.987 3.08 4.127 1.573 8.583-1.006 2.97-2.982 4.781-5.929 5.433-.337.108-.506.282-.506.522 0 .36.456.399 1.114 2.086.44 1.124.471 4.336.096 9.635-.951.242-1.691.405-2.22.488-.937.147-1.955.23-2.955.261-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    