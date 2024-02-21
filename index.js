//state
//action
//reducer
//store

const { createStore } = require("redux");


const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const INCREMENT_BY_VALUE="INCREMENT_BY_VALUE"

//state
const initialState={
    count:0
}

//action
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
const incrementByValue=(value)=>{
    return {
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}

//reducer-function-functional operation
const reducerFunction=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                count:state.count+1
            }
        case DECREMENT:
            return {
                count:count-1
            }
        case INCREMENT_BY_VALUE:
            return {
                count:state.count+action.payload
            }        
    
        default:
            state;
    }


}
//store 

const store=createStore(reducerFunction)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(incrementByValue(10))

