import React,{Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from "../../components/HeaderComponent/index";
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import ChooseCity from "../../components/ChooseCity/index";
class City extends Component{
    render(){
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChooseCity changeCity = {this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(city){
        //city代表选择城市之后的结果
        let oldInfo = this.props.userInfo;  //取出原有的数据
        oldInfo.cityName = city;  //更改最新城市，将最新数据派发成动作
        this.props.userActions.update(oldInfo);
        //更改成功后跳转到首页
        this.props.history.push('/');

    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)
