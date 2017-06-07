import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore? <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>:<div>我是有底线的</div>}
            </div>
        )
    }
    componentDidMount(){//绑定滚动事件
        this.fn = ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                //先判断是否正在加载   如果正在加载 及不要再次获取
                if(this.props.isLoading){
                    return
                }
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;//获取当前元素的位置，上下左右
                if(top<screen){ //如果按钮进入可视窗口  则加载更多
                    this.props.loadMore();
                }
                //判断按钮距离屏幕顶端的高度和可视窗口的高度
            },50)
        };
        window.addEventListener('scroll',this.fn);
    }
    componentWillUnmount(){//移除滚动事件
        window.removeEventListener('scroll',this.fn);
    }

    loadMore(){
        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }
}
