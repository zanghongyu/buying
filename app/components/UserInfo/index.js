import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span><i className="iconfont icon-yonghufill"></i>用户名：{this.props.userInfo.username}</span>
                <span><i className="iconfont icon-yonghufill"></i>城市：{this.props.userInfo.cityName}</span>
            </div>
        )
    }
    //检查时候登录  如果没有登录过跳到登录页面


}
