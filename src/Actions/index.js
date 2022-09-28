export const ADD = ()=>{
    return{
        type: "ADD"
    }
}

export const REMOVE = ()=>{
    return{
        type: "REMOVE"
    }
}
export const ADD_TO_CART = (product)=>{
    return {
        type:"ADD_TO_CART",
        payload:product
    }
}

export const REMOVE_FROM_CART = (index)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:index
    }
}

export const INIT_PRODUCTS = (products)=>{
    return {
        type:"INIT_PRODUCTS",
        payload:products
    }

}

export const INCREASE_ITEM = (count)=>{
    return {
        type:"INCREASE_ITEM",
        payload:count
    }
}
export const ADD_PRODUCT = (sum)=>{
    return {
        type:"ADD_PRODUCT",
        payload:sum
    }
}
export const ON_CLICK = ()=>{
    return {
        type:"ON_CLICK"
    }
}

export const RESTORE_ATTR_STYLE = (id)=>{
    return {
        type:"RESTORE_ATTR_STYLE",
        payload:id
    }
}

export const FETCH_PRODUCT_ID = (id)=>{
    return {
        type:"FETCH_PRODUCT_ID",
        payload:id
    }
}

export const UPDATE_CART = (updated_product)=>{
    return {
        type:"UPDATE_CART",
        payload:updated_product
    }
}

export const CHANGE_CATEGORY = (category_id)=>{
    return {
        type:"CHANGE_CATEGORY",
        payload:category_id
    }
}

export const FETCH_ITEM = (product)=>{
    return {
        type:"FETCH_ITEM",
        payload:product
    }
}

export const CHANGE_CURRENCY = (id)=>{
    return{
        type:"CHANGE_CURRENCY",
        payload:id
    }
}

export const STORE_ATTRIBUTE = (id)=>{

    return {
        type:"STORE_ATTRIBUTE",
        payload:id
    }
}

export const UPDATE_STORED_ATTRIBUTE = (id)=>{
    return {
        type:"UPDATE_STORED_ATTRIBUTE",
        payload:id
    }
}

export const DELETE_STORED_ATTRIBUTE = (id)=>{
    return {
        type:"DELETE_STORED_ATTRIBUTE",
        payload:id
    }
}

