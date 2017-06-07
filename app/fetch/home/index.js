import {get} from '../index';
export function getAd() {
    return get('/api/ad');
}

//获取列表数据 对象类型
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page);
}