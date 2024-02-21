//async function-api calling
//api url:https://jsonplaceholder.typicode.com/todos
//middleware-rudex-thunk
//axios-api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

//constants
const TODOS_REQUEST="TODOS_REQUEST";
const TODOS_SUCCESS="TODOS_SUCCESS";
const TODOS_FAIL="TODOS_FAIL";
const URL="https://jsonplaceholder.typicode.com/todos";


//state
const initialTodosState={
    todos:[],
    isLoading:false,
    error:null
}
//actions

const todosRequest=()=>{
    return {
        type:TODOS_REQUEST
    }
}
const todosFail=(fail)=>{
    return {
        type:TODOS_FAIL,
        payload:fail,
    }
}
const todosSuccess=(success)=>{
    return {
        type:TODOS_SUCCESS,
        payload:success
    }
}

//reducer

const todoReducer=(state=initialTodosState,action)=>{
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                successFull:action.payload,
            }  
        case TODOS_FAIL:
            return {
                ...state,
                isLoading:false,
                failFull:action.payload
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
            const todos=res.data;
            const titles=todos.map(item=>item.title);
            console.log(titles);
        })
        .catch(error=>{
            console.log(error.messeage)
        })

    }
}



//store
const store=createStore(todoReducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchData())
