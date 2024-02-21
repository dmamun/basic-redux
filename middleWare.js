const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_USER="ADD_USER";
//state
const initialUser={
    user:["manun","sakib","tamim"]
}
//action

const add_user=(user)=>{
    return {
        type:ADD_USER,
        payload:user
    }
}
const reducer_add_user=(state=initialUser,action)=>{
    switch (action.type) {
        case ADD_USER:
            return {
                user:[...state.user,action.payload]
            }
    
        default:
            return initialUser;
    }

}

const store=createStore(reducer_add_user,applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(add_user("akib"))