import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const { products } = this.context;
        return (
            <div id="product">
                <div className="sidebar">
                    <div className="BarTitle1">漫畫分類</div>
                    <div className="BarTitle1_bar1">奇幻／魔法</div>
                    <div className="BarTitle1_bar2">科幻／機戰</div>
                    <div className="BarTitle1_bar3">動作冒險</div>
                    <div className="BarTitle1_bar4">戀愛故事</div>
                    <div className="BarTitle1_bar5">懸疑推理</div>
                    <div className="BarTitle1_bar6">靈異／神怪</div>
                    <div className="BarTitle1_bar7">歷史／戰役</div>
                    <div className="BarTitle1_bar8">運動／競技</div>
                    <div className="BarTitle1_bar9">其他類型</div>
                    <div className="Bar2">
                        <div className="BarTitle2">快速導覽</div>
                        <div className="BarTitle2_bar1">暢銷榜</div>
                        <div className="BarTitle2_bar2">新書</div>
                        <div className="BarTitle2_bar3">即將出版</div>
                        <div className="BarTitle2_bar4">讀者書評</div>
                    </div>
                </div>

                <div className="cardbg">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.images[0]} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button onClick={() => this.context.addCart(product._id)}>加入購物車</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Products