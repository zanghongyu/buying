import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpages/Ad";
import {connect} from 'react-redux';
import List from "./subpages/List";

 class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市 传递给homeHeader  组件
export default connect(
    state=>{
        return {userInfo:state.userInfo} //取出redux state中userinfo的数据，赋予给变量userinfo
    }
)(Home)

