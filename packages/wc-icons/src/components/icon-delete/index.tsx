
    /**
     * 此文件由脚本自动生成，请勿手动修改
     * @created 2023/8/3 16:06:29
     * @description delete 图标组件
     * @file icon-delete.tsx
     * @auther kviewui
     */
    import { Component, h, Fragment, Prop } from '@stencil/core';

    @Component({
        tag: 'icon-delete',
        shadow: true,
    })
    export class IconDelete {
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
                    <path d="M14 11 4 24l10 13h30V11H14ZM21 19l10 10M31 19 21 29" fill="none" stroke={this.color} stroke-width={this.strokeWidth} stroke-linejoin="round" fill-opacity="0.9"></path>
                </svg>
            </Fragment>);
        }
    }
    