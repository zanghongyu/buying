import React,{Component} from 'react';
//主页头部组件
import './index.less';
import {Link} from 'react-router-dom';
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header bg">
                <Link to="/city">
                <div className="city">
                {this.props.cityName}
                    <i className="iconfont icon-xiangxia2"></i>
                </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <input type="text" />
                </div>
                <div className="profile">
                    <Link to="/login">
                        <i className="iconfont icon-yonghufill"></i>
                        <span>我的</span>
                    </Link>
                </div>

            </div>
        )
    }
}
