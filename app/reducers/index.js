//合并所有reducer  导出去  让store使用
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {store} from './store';
export default combineReducers({
    userInfo,
    store
})
/*
 新的state
 {
 userInfo:action.data
 }*/