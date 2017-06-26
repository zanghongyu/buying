import React,{Component} from 'react';
//路由的两种类型  HashRouter   BrowserRouter
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home'
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
import City from '../containers/City';
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由  exact*/}
                       <Route exact path="/" component={Home}/>
                       <Route path="/detail/:id" component={Detail}/>
                        {/*先跳转到登录页 ，登录后再回到登录之前的页面  在login路径后可能需要保存上次点击login的路径 ，如果登录过，在登录过跳转到用户页面*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
