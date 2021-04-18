import React, { Component, useContext, useState } from 'react'
import { DataContext } from '../Context'
import { Link, useParams } from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        idx: 0
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    };

    // handleNext = () => {
    //     if (this.state.idx < 2) {
    //         this.setState({
    //             idx: this.state.idx + 1
    //         });
    //     }
    // }

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state;
        const { addCart } = this.context;

        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            {/* <img src={item.images[this.state.idx]} alt="" /> */}
                            <img src={item.images[0]} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                {/* <Colors colors={item.colors} /> */}
                                <p>作者 : {item.description}</p>
                                <p> 出版社 : {item.publish}</p>
                                <p>{item.content}</p>
                                {/* <button onClick={this.handleNext}>next</button> */}
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    加入購物車
                                </Link>
                            </div>
                            <div className="recommandation">
                                <h2>相關推薦</h2>
                                <hr/>
                                <div className="card">
                                    <div className="card1">
                                        <img src={item.images[1]} alt="" />
                                        <div className="rec_content1">
                                            <h4>{item.smalltitle[0]}</h4>
                                            <span>${item.smallprice[0]}</span>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <img src={item.images[2]} alt="" />
                                        <div className="rec_content2">
                                            <h4>{item.smalltitle[1]}</h4>
                                            <span>${item.smallprice[1]}</span>
                                        </div>
                                    </div>
                                    <div className="card3">
                                        <img src={item.images[3]} alt="" />
                                        <div className="rec_content3">
                                            <h4>{item.smalltitle[2]}</h4>
                                            <span>${item.smallprice[2]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}
export default Details