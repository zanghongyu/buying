import React,{Component} from 'react';
import ListItem from "./ListItem/index";
import './index.less'
export default class ListComponent extends Component{
    render(){
        return (
            <div className="list-component">
                <h3>附近美食</h3>
                {this.props.data.map((item,index)=>(
                    <ListItem key={index} data={item}/>
                ))}
            </div>
        )
    }
}
