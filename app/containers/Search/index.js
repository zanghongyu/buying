import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
//可以从轮播图点击来
//搜索框输入内容进入
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader
                    value={this.props.match.params.keyword || ''}
                    history={this.props.history}
                    fn = {this.toSearch.bind(this)}
                />
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value)
    }
}
