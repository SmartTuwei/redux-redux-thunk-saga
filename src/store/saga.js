
import {put, takeEvery, } from 'redux-saga/effects' //{ call, put, takeEvery, takeLatest } 
import {initListAction} from "./actionCreators"
import {GET_INIT_LIST} from "./action_types"
import axios from "axios"

function* fetInitList(){
    try{
       var res = yield axios.get("/list.json");
       const acition =  initListAction(res.data);
       yield put(acition);//提交到创库中
    }catch(e){
        console.log(e);
    }
    console.log("fetInitList");
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetInitList);
}
export default mySaga;