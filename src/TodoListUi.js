import React from "react";
import {Input,Button,List} from "antd";

//无状态组件；

const TodoListUi = (props)=>{
    return(
        <div style={{width:"500px",height:"400px",margin:"0 auto",padding:'30px'}}>
            <div>
                <Input 
                    onChange={props.handleInputChange}
                    style={{width:"300px"}} 
                    placeholder="todo info" 
                    value= {props.inputValue}/>
                <Button 
                    onClick= {props.handleClickBtn} 
                    type="primary">
                    Primary
                </Button>
            </div>
            <div style={{"marginTop":"20px"}}>
                <List
                    style={{width:"300px"}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{props.handleDeleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        </div>      
    )
}

//UI  组件 (傻瓜组件)

// class TodoListUi extends Component{
//     render(){
//         return (
//             <div>
//                 <div>
//                     <Input 
//                         onChange={this.props.handleInputChange}
//                         style={{width:"300px"}} 
//                         placeholder="todo info" 
//                         value= {this.props.inputValue}/>
//                     <Button 
//                         onClick= {this.props.handleClickBtn} 
//                         type="primary">
//                         Primary
//                     </Button>
//                 </div>
//                 <div style={{"marginTop":"20px"}}>
//                     <List
//                         style={{width:"300px"}}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>  
//         )
//     }
// }

export default TodoListUi;