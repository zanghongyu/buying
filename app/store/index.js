import {createStore} from 'redux';
import reducers from '../reducers';
//initState  初始状态
export function configureStore(initState) {
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}