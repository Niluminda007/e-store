

const productCountReducer = (count=0 , action)=>{
    switch(action.type){
        case "INCREASE_ITEM":
            return count + action.payload 
        default:
            return count
    }

}

export default productCountReducer;