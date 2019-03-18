import {GET_INIT_LIST,CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from "./action_types";
const defaultState = {
    inputValue :"",
    list:[]
};
export default (state = defaultState,action) =>{
    // console.log(state,action);
    if(action.type === CHANG_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        var index = action.index;
        newState.list.splice(index,1);
        return newState;
    }
    //thunk-action 请求
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;    
    }
    return state;
}