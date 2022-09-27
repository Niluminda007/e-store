const selectedAttrReducer = (state=[],action)=>{
    switch(action.type){
        case "STORE_ATTRIBUTE":
            return [...state,action.payload]

        case "UPDATE_STORED_ATTRIBUTE":
            return state.filter( attr=> attr!== action.payload)

        default:
            return state
    }
}

export default selectedAttrReducer