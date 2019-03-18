import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from "../store/thunkindex";
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from "../store/actionCreators"
import TodoListUi from "./TodoListUi"
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange(e){
        // console.log(e.target.value);
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange = ()=>{
        //监听store 变化的
        console.log("订阅监听store");
        this.setState(store.getState())
    }
    handleClickBtn = (e)=>{
        const action = getAddItemAction();
        store.dispatch(action);
    };
    handleDeleteItem = (index)=>{
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }
    render(){
        return(
            <TodoListUi 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleClickBtn={this.handleClickBtn}
                handleDeleteItem= {this.handleDeleteItem}
            />
        )
    }
    componentDidMount(){
        //redux-thunk
          const action = getTodoList();
          store.dispatch(action);
    }
}

export default Todo;