import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less';
import {Link} from 'react-router-dom'
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let opts = {
            continuous: false,
            callback:(index)=>{
                this.setState({
                    index
                })
            }
        };
        return (
            <div className="slders">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                <div>
                    <ul>
                        <Link to="#">
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>美食</span>
                        </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>电影/演出</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>酒店住宿</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>休闲娱乐</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>外卖</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>火车票</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>ktv</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>周边游</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>丽人/美发</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>旅游出行</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <ul>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>高端酒店</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>运动健身</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>生活服务</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>母婴亲子</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>结婚/摄影</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>景点</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>温泉</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>学习培训</span>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>家装</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index == 0?"active":""}></li>
                    <li className={this.state.index == 1?"active":""}></li>
                </ul>
            </div>
        )
    }
}
