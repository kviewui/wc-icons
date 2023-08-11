
/**
 * 此文件由脚本自动生成，请勿手动修改
 * @created 2023/8/11 12:22:40
 * @description 图标组件
 * @file icons.tsx
 * @auther kviewui
 * @example
 * <icons name="add-cirle"></icons>
 */
import { Component, h, Fragment, Prop, State,  getAssetPath} from '@stencil/core';

@Component({
    tag: 'wc-icons',
    shadow: true,
    styleUrl: '../../styles/index.css'
})
export class Icons {
    /**
     * 图标名称
     */
    @Prop() name: string;

    
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


    @State() style: any = {
        '--icon-fill': this.fill,
        '--icon-stroke': this.color,
        strokeWidth: this.strokeWidth + 'px',
        strokeLinecap: this.strokeLinecap,
        strokeLinejoin: this.strokeLinejoin
    };
    
    /**
     * 获取图标样式
     */
    getStyle() {
        return {
            transform: 'rotate(' + this.rotate + 'deg)',
            animation: this.spin ? 'spin ' + this.duration + 's linear infinite' : 'none',
            width: this.size + 'px',
            height: this.size + 'px'
        };
    }

    render() {
        // 获取 svg sprite 图标
        const iconPath = getAssetPath('../assets/icons-svg-symbol/symbol/sprite.symbol.svg');
        // 渲染图标
        return (
            <Fragment>
                <svg viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" class='icon' style={this.getStyle()}>
                    <use xlinkHref={iconPath + '#' + this.name} style={this.style}></use>
                </svg>
            </Fragment>
        );
    }
}
    