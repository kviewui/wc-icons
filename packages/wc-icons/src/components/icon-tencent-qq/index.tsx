
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/4 14:58:42
     * @description tencent-qq 图标组件
     * @file icon-tencent-qq.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-tencent-qq',
        shadow: true,
    })
    export class IconTencentQq {
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
                    <path d="M23.793 44.518c-3.659 0-7.017-1.225-9.179-3.053-1.098.328-2.503.855-3.389 1.51-.759.56-.664 1.13-.527 1.361.6 1.013 10.296.647 13.095.332v-.15Zm0 0c3.659 0 7.017-1.225 9.179-3.053 1.097.328 2.502.855 3.389 1.51.758.56.663 1.13.527 1.361-.6 1.013-10.296.647-13.095.332v-.15Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M36.339 20.933c-1.641.448-6.483 1.617-12.525 1.658h-.044c-6.195-.042-11.128-1.27-12.643-1.691-.311-.087-.481-.267-.481-.267a74.794 74.794 0 0 1-.025-1.462c0-8.066 3.807-16.17 13.171-16.171 9.364 0 13.172 8.105 13.172 16.171 0 .479-.024 1.407-.025 1.463 0 0-.21.192-.6.299Zm2.49 4.417c.517 1.35 1.028 2.755 1.403 3.96 1.786 5.748 1.207 8.126.767 8.18-.946.114-3.68-4.327-3.68-4.327 0 4.513-4.074 11.441-13.403 11.505h-.247c-9.33-.064-13.404-6.992-13.404-11.505 0 0-2.734 4.44-3.68 4.327-.44-.054-1.018-2.432.768-8.18.374-1.204.885-2.61 1.403-3.96 0 0 .35-.022.526.03 1.45.418 2.994.789 4.563 1.1-.267 1.654-.42 3.703-.276 6.122.384 6.434 4.205 10.479 10.104 10.537h.24c5.898-.058 9.718-4.103 10.103-10.537.144-2.42-.008-4.467-.276-6.123a55.171 55.171 0 0 0 4.64-1.122c.15-.043.448-.007.448-.007Zm-5.089 1.13c-3.44.68-6.995 1.07-9.926 1.035h-.044c-2.93.035-6.486-.355-9.925-1.036l.042-.256c3.427.676 6.964 1.062 9.882 1.027h.045c2.918.036 6.457-.351 9.883-1.027.015.084.03.17.043.256ZM18.038 11.686c.068 1.84 1.153 3.287 2.424 3.229 1.269-.057 2.242-1.595 2.173-3.436-.069-1.84-1.154-3.287-2.423-3.23-1.27.058-2.243 1.596-2.174 3.437Zm9.087 3.229c1.27.057 2.356-1.39 2.424-3.23.07-1.84-.904-3.378-2.174-3.436-1.27-.056-2.354 1.39-2.423 3.23-.07 1.84.904 3.38 2.173 3.436Zm-3.31 1.009c4.232 0 7.65.837 7.99 1.59a.25.25 0 0 1 .025.106.255.255 0 0 1-.047.145c-.286.418-4.082 2.478-7.968 2.478h-.046c-3.886 0-7.682-2.061-7.968-2.478a.257.257 0 0 1-.047-.144c0-.038.009-.074.025-.108.34-.752 3.758-1.59 7.99-1.59h.046Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M22.022 11.714c.058.727-.34 1.373-.89 1.443-.549.07-1.04-.461-1.1-1.188-.057-.727.341-1.373.89-1.443.55-.071 1.042.461 1.1 1.188Zm3.49.243c.112-.201.877-1.259 2.46-.874.415.102.608.25.648.309.06.086.077.21.016.375-.12.329-.369.32-.506.256-.09-.042-1.192-.777-2.208.32-.07.075-.195.1-.313.012-.119-.09-.167-.272-.097-.398ZM15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53.39 53.39 0 0 1-5.807-.671Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>,<path d="M36.938 20.634s-5.642 1.78-13.124 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29l-1.89-4.716Z" fill={this.fill} stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin={this.strokeLinejoin} stroke-linecap={this.strokeLinecap} fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    