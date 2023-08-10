import { Component, h, Prop, getAssetPath, Element, State } from '@stencil/core';

@Component({
    tag: 'wc-icon',
    shadow: true
})
export class WcIcon {
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
    @Prop() color: string = 'red';

    /**
     * 获取 shadow dom
     */
    @Element() el: HTMLElement;

    /**
     * 定义一个状态变量，用于存储样式属性和默认值
     */
    @State() style: { [key: string]: any } = {
        width: this.size,
        height: this.size,
        fill: 'red !important',
        stroke: '#00bc79',
        strokeWidth: '100'
    };

    // /**
    //  * 监听属性变化
    //  */
    // @Watch('style')
    // watchHandler(newValue: { [key: string]: string }) {
    //     console.log(newValue);
    //     // 获取 svg 元素或者 svg use 元素
    //     const svg = this.el.shadowRoot.querySelector('svg') as SVGElement;
    //     const use = this.el.shadowRoot.querySelector('use') as SVGUseElement;
    //     // 设置 svg 元素样式
    //     Object.keys(newValue).forEach(key => {
    //         svg.style.setProperty(key, newValue[key]);
    //         use.style.setProperty(key, newValue[key]);
    //     });
    // }

    /**
     * 设置图标样式
     */
    setIconStyle() {
        return {
            ':slotted(path)': {
                width: `${this.size}px`,
                height: `${this.size}px`,
                fill: this.color,
                stroke: this.color
            }
        } as { [key: string]: any };
    }

    componentDidLoad() {
        // 获取 svg 元素或者 svg use 元素
        const svg = this.el.shadowRoot.querySelector('svg') as SVGElement;
        const use = this.el.shadowRoot.querySelector('use') as SVGUseElement;
        console.log(this.el.shadowRoot.querySelector('svg'));

        // 设置 svg 元素样式
        Object.keys(this.style).forEach(key => {
            svg.style.setProperty(key, this.style[key]);
            use.style.setProperty(key, this.style[key]);
        });
    }

    render() {
        // 获取 svg sprite 图标
        const iconPath = getAssetPath(`../assets/icons-svg-symbol/sprite.symbol.svg`);
        // 渲染图标
        return (
            <div style={{'color': 'red'}}>
                <svg viewBox="0 0 24 24" fill='#00bc79' preserveAspectRatio="xMinYMin meet">
                    <use xlinkHref={`${iconPath}#${this.name}`} style={{'stroke': 'red'}}></use>
                </svg>
            </div>
        );
    }
}