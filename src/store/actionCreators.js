import {CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from "./action_types";
import axios from "axios"
export const getInputChangeAction=(value)=>({
    type:CHANG_INPUT_VALUE,
    value
});

export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM,
})

export const getDeleteItemAction=(index)=>({
    type:DELETE_TODO_ITEM,
    index
})
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data
})
//redux-thunk 可以使我们的action返回一个函数
export const getTodoList = ()=>{
//想要触发store改变 要触发dispatch方法
    return (dispatch)=>{
        axios.get("/list.json").then(function(res){
            const data = res.data;
            const action = initListAction(data)
            dispatch(action);
        }).catch(function(err){
            console.log(err)
        }) 
    }
}
export const getInitList = ()=>({
    type:GET_INIT_LIST
})