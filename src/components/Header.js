import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }


    render() {
        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <div className="header">
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo">
                    <h1><Link to="/">小鎮書店</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/product">商品</Link></li>
                        <li><Link to="/contact">進書消息</Link></li>
                        <li><Link to="/about">庫存查詢</Link></li>
                        <li><Link to="/login">會員登入</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <div className="number">{cart.length}</div>
                        <Link to="/cart">
                            <div className="cart_icon">
                                <img src={CartIcon} alt="" width="20" />
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header