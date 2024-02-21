//axios
//thunk-middleware
//api url:https://jsonplaceholder.typicode.com/todos

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

//constant
const TODOS_REQUEST="TODOS_REQUEST"
const TODOS_SUCCESS="TODOS_SUCCESS"
const TODOS_FAIL="TODOS_FAIL"
const URL="https://jsonplaceholder.typicode.com/todos";
//state

const initialTodosState={
    todos:[],
    isLoading:false,
    error:null
}
//action
const todosRequest=()=>{
    return {
        type:TODOS_REQUEST
    }
}
const todosSuccess=(success)=>{
    return {
        type:TODOS_SUCCESS,
        payload:success
    }
}
const todosFail=(fail)=>{
    return {
        type:TODOS_FAIL,
        payload:fail,
    }
}
//reducer

const todosReducer=(state=initialTodosState,action)=>{
    switch (action.type) {
       case TODOS_REQUEST:
          return {
            ...state,
            isloading:true
          }
        case TODOS_SUCCESS:
            return {
                ...state,
                isloading:false,
                todos:action.payload
            } 
        case TODOS_FAIL:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }     
    
        default:
            return state;
    }

}


//fetchData
const fetchData=()=>{
    return (dispatch)=>{
        dispatch(todosRequest())
        axios.get(URL)
        .then(res=>{
            const datas=res.data;
            const titles=datas.map(item=>item.title)
            console.log(titles)
        })
        .catch(error=>{
            console.log(error.message)
        })


    }

}

//store

const store=createStore(todosReducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchData())