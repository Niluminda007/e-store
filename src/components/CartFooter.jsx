import React,{Component} from "react";
import {connect} from "react-redux";

class CartFooter extends Component{


    render(){
        return(
            <div className="footer-item-container">
            <p className="footer-info">Tax 21%: <small  className="info-value">$42</small></p>
            <p className="footer-info">Quantity: <small className="info-value">{this.props.item_count}</small></p>
            <p className="item-total footer-info">Total: <small className="info-value">{(this.props.item_sum).toFixed(2)}</small></p>
            <button className="order-btn">ORDER</button>


            </div>

        )
    }
}

const mapStateToProps = (state)=>{
    return {
        item_count:state.increase_item,
        item_sum:state.product_sum
    }
}
export default connect(mapStateToProps,null)(CartFooter);