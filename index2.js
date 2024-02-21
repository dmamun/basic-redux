//state
//action-object-type,payload
//reducer-function-state,action
//store\

const { createStore } = require("redux");

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const ADD_USER="ADD_USER";
const INCREMENT_COUNTER_BY_VALUE="INCREMENT_COUNTER_BY_VALUE";
//state
const initialState={
    count:0,
    user:["mamun"],
}
//action

const add_user=(user)=>{
    return {
        type:ADD_USER,
        payload:user,
    }
}

const increment=()=>{
    return {
        type:INCREMENT
    }
}
const decrement=()=>{
    return {
        type:DECREMENT
    }
}
const incrementCountByValue=(value)=>{
    return {
        type:INCREMENT_COUNTER_BY_VALUE,
        payload:value
    }
}
//reducer

const reducerFun=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count-1
            }
        case INCREMENT_COUNTER_BY_VALUE:
            return {
                count:state.count+action.payload
            }
        case ADD_USER:
            return {
                user:[...state.user+action.payload]
            }         
    
        default:
            state;
    }

}
//store
const store=createStore(reducerFun)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementCountByValue(10))
store.dispatch(add_user("sakib"));

