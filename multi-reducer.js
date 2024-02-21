const { createStore, combineReducers } = require("redux")

//Product-state
const PRODUCT_ADD="PRODUCT_ADD"
const initialProduct={
    product:["pen","pencil"]
}
//Card-state
const CARD_ADD="CARD_ADD";
const initialCard={
    card:["biyani","polawo","khorma"]
}
//Product-action
const product_action=(product)=>{
    return {
        type:PRODUCT_ADD,
        payload:product
    }

}
//Card-action
const card_action=(card)=>{
    return {
        type:CARD_ADD,
        payload:card
    }
}
//Product-reducer
const Product_Reducer=(state=initialProduct,action)=>{
    switch (action.type) {
        case PRODUCT_ADD:
            return {
                product:[...state.product,action.payload]
            }
    
        default:
           return state;
    }

}
//Card-reducer
const Card_Reducer=(state=initialCard,action)=>{
    switch (action.type) {
        case CARD_ADD:
            return {
                card:[...state.card,action.payload]
            }
    
        default:
            return state;
    }

}
//multi-reducer

const rootReducer=combineReducers({
    ProductR:Product_Reducer,
    CardR:Card_Reducer

})


//store


const store=createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(card_action("khata"))

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(product_action("khata"))