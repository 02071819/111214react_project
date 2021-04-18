import React, { Component } from 'react'
import facebook from './svg/facebook-square-brands.svg'
import instagram from './svg/instagram-square-brands.svg'
import twitter from './svg/twitter-square-brands.svg'
import './css/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer1">
                    <div className="serv1">顧客服務</div>
                    <div className="serv2">配送方式</div>
                    <div className="serv3">付款方式</div>
                </div>

                <div className="footer2">
                    <div className="payinfo1">條款與政策</div>
                    <div className="payinfo2">購物須知</div>
                    <div className="payinfo3">退換貨政策</div>
                    <div className="payinfo4">隱私條款</div>
                    <div className="payinfo5">購物金使用規範</div>
                    <div className="payinfo6">預購相關規章</div>
                </div>

                <div className="footer3">
                    <div className="serv_info">服務資訊</div>
                    <div className="foottime">服務時間：12:00~21:00</div>
                    <div className="footphone">客服專線：(02) 2366-6666</div>
                </div>

                <div className="Copyright">
                    隱私條款 | 條款及細則 | 2021 © 小鎮書店
                </div>

                <div className="Icon_footer">
                    <div className="fb"><img src={facebook} alt="" /></div>
                    <div className="ig"><img src={instagram} alt="" /></div>
                    <div className="tw"><img src={twitter} alt="" /></div>
                </div>
            </footer>
        )
    }
}

export default Footer
