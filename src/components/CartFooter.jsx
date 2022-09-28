import React,{Component} from "react";
import {connect} from "react-redux";
import symbols from "../utils/currencySymbols";
import getSum from "../utils/converter";

class CartFooter extends Component{


    render(){
        return(
            <div className="footer-item-container">
            <p className="footer-info">Tax 21%: <small  className="info-value">$42</small></p>
            <p className="footer-info">Quantity: <small className="info-value">{this.props.item_count}</small></p>
            
            <p className="item-total footer-info">Total: <small className="info-value">{symbols[this.props.currency_state]}{getSum(this.props.items,this.props.currency_state).toFixed(2)}</small></p>
            <button className="order-btn">ORDER</button>


            </div>

        )
    }
}

const mapStateToProps = (state)=>{
    return {
        item_count:state.increase_item,
        item_sum:state.product_sum,
        currency_state:state.change_currency,
        items:state.add_toCart
    }
}
export default connect(mapStateToProps,null)(CartFooter);