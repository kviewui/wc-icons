
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/3 16:06:29
     * @description add 图标组件
     * @file icon-add.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-add',
        shadow: true,
    })
    export class IconAdd {
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

        render() {
            return (<Fragment>
                <svg width={this.size} height={this.size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" fill="none" stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin="round" fill-opacity="0.9"></path>,<path d="M24 16v16M16 24h16" fill="none" stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin="round" fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    