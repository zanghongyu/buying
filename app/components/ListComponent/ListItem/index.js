import React, {Component} from 'react';
import './index.less';
/*Link 组件主要用于跳转路径  必须要有to属性*/
import {Link} from 'react-router-dom';
export default class ListItem extends Component {
    render() {
        let {img, title, subTitle, distance, price, number, id} = this.props.data;
        return (
            <Link to={'/detail/'+id}>
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h5>{title}</h5>
                    <p>{subTitle}</p>
                    <div>
                        <strong>￥{price}</strong>
                        <span>已售{number}</span>
                    </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
            </Link>
        )
    }
}
