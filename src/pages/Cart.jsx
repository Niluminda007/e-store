import React, {Component} from "react";
import {connect} from "react-redux";
import {ADD_TO_CART,REMOVE_FROM_CART} from "../Actions";
import CartCard from "../components/CartCard";
import CartFooter from "../components/CartFooter";
import "./Cart.css";





class Cart extends Component{

    constructor(props){
        super(props)

    }

    displayCartItems(){
        const items = this.props.products.items
        return (
            <div className="cart-container">
           
            {items.map( item=>{
                
                return (
            
        
            <CartCard key={item.id} id={item.id} images={item.gallery} item_name={item.name} category={item.category} price={item.prices[this.props.currency_id]}  brand={item.brand} attributes={item.attributes} count={item.count} chosen_attr={item.chosen_attr}  />
            
            );
            })}
            </div>
        )        
    }

    render(){
        
            return(
                <div>
                <hr className="cart-item-line" />
                {this.displayCartItems()}
                <CartFooter quantity={1} total={2} />
                </div>            
            );
        
        
    }
}

const mapStateToProps = (state)=>{
    return {
        products:state.add_toCart,
        currency_id:state.change_currency
    }
}

const mapDispatchToProps = ()=>{
    return {
        add_to_cart:ADD_TO_CART,
        remove_from_cart:REMOVE_FROM_CART,
        

    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Cart);

