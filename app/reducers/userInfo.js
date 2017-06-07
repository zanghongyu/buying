import * as Types from '../action-types/userInfo';

let initState = {};
export function userInfo(state=initState,action) {
    switch (action.type){
        //将传入的state更新成最新的状态
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}

/*
* dispatch   执行2件事
* 1.执行reducers
* 2.执行所有的监听函数
* */
