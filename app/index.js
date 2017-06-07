import React from 'react';
import {render} from 'react-dom';
import './assets/index.less'
import App from './containers/index';
import {Provider} from 'react-redux';
//导入store
import  {configureStore} from './store';
let store = configureStore({
    userInfo:{a:1}
});//生成store
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);