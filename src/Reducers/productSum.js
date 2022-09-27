const producSumReducer = (sum=0, action)=>{
    switch(action.type){
        case "ADD_PRODUCT":
            return sum + action.payload
        default :
        return sum
    }
}

export default producSumReducer;