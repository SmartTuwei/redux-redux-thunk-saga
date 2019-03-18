import { createStore,applyMiddleware,compose} from "redux";//要使用中间件需要加载applyMiddleware；
import thunk from "redux-thunk"; // redux 中间件
import reducer from "./reducer"; 


//1.store 是唯一的 
//2.且只有Store 才能改变state内容
//3.纯函数是指，给定固定的输入，就一定会有固定的输出，且不会有任何副作用；


//1.中间件thunk 加上浏览器 devtools插件;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer,enhancer);

//2.中间件saga 加上浏览器 devtools插件;
//__REDUX_DEVTOOLS_EXTENSION__指的是google浏览器插件中的预览效果；
// sagaMiddleware.run(todosagas)
export default store;
