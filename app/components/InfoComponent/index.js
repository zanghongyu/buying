import React, {Component} from 'react';
import './index.less';
import Star from "../Star/index";
import './index.less'
export default class InfoComponent extends Component {
    render() {
        //console.log(this.props.data);
        let {desc, img, star, title, subTitle, price} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        <h4>{title}</h4>
                        <div className="info-star">
                            {/*star组件要接收一个点亮的星星数*/}
                            <Star count={star}/><span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                {/*将内容转化成html插入到页面中*/}
                <div className="info-desc" dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}
