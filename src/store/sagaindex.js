import { createStore,applyMiddleware,compose} from "redux";//要使用中间件需要加载applyMiddleware；
import reducer from "./reducer"; 
import createSagaMiddleware from 'redux-saga'
import sagas from "./saga";
//1.store 是唯一的 
//2.且只有Store 才能改变state内容
//3.纯函数是指，给定固定的输入，就一定会有固定的输出，且不会有任何副作用；

//1 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

//2.中间件thunk 加上浏览器redux devtools插件 指的是google浏览器插件中的预览效果;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//3.使用sagaMiddleware中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
//4.创建store 
const store = createStore(reducer,enhancer);

//5.载入配置文件；
sagaMiddleware.run(sagas);
//导出store;
export default store;
