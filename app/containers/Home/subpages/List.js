import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/ListComponent/LoadMore/index";

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true, //是否有更多
            data:[],
            page:0, //页码
            isLoading:true//每次加载更多时，状态都为正在加载
        }
    }
    render(){
        return (
            <div>

                {this.state.data.length?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processDate(getList(this.props.cityName,0));
    }
    //需要在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发我们传递的函数
    loadMore(){
        //console.log('more......');
        this.setState({
            page:this.state.page+1,
            isLoading:false
        },()=>{ //这个函数可以获取到最新页码的状态
            this.processDate(getList(this.props.cityName,this.state.page));
        })
    }

    //处理成功后的逻辑
    processDate(result){//result是获取到的对象，先转化为json对象，然后在结构赋值获取hasMore,data
        result.then(res=>res.json()).then(({hasMore,data})=>{
            //console.log(data);
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}
