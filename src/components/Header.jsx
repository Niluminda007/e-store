import React, {Component} from "react";
import logo from "../images/brand.svg";
import cart from "../images/cart.svg";
import {connect} from "react-redux";
import {ON_CLICK,CHANGE_CATEGORY,CHANGE_CURRENCY} from "../Actions";
import {Link} from "react-router-dom";
import MiniCart from "../pages/MiniCart";
import symbols from "../utils/currencySymbols";
import dropDownArrow from "../images/dropDownArrow.svg";


class Header extends Component{
    constructor(props){
        super(props);
        this.state={           
            category_id:"all",
            currency_id:"0",
            is_dropDown_clicked:false
           
        };

    }
    cart_url = {backgroundImage: 'url(' + cart + ')' , backgroundRepeat: "no-repeat"};
    category_style = {color:"#5ECE7B" , borderBottom:"solid 2px #5ECE7B"};
    dropDown_arrow_url = {backgroundImage: 'url(' + dropDownArrow + ')', backgroundRepeat: "no-repeat" };

    
    handleClick = (e)=>{
        const {id} = e.target;
        this.props.change_category(id)
        this.setState({
            category_id:id
        });
    }

    handle_overlay = (e)=>{
        const {id} = e.target
        if(id==="overlay"){
            this.props.mini_cart_click()
        }
       
    }



    handleCurrency = e=>{
        // document.getElementById("currency_content").classList.toggle("show")
        this.setState({
            is_dropDown_clicked:!this.state.is_dropDown_clicked
        })
               
    }

    handleCurrency_convert = e=>{
        const {id} = e.target
        this.setState(prevState =>{     
            return {currency_id:id}
        })
        
        this.props.change_currency(parseInt(id))

    }

    handleCart = ()=>{
        this.props.mini_cart_click()
    }

    render(){
       
            return(
            

                <div className="header">
                <nav className="category-nav">
                
                    <ul className="category-links">
                    
                    <Link to={`/ItemArea/${this.props.category_id}`}><li className="category-item" id="all" onClick={this.handleClick} style={this.state.category_id === "all" ? this.category_style : null } >All</li></Link>
                    <Link to={`/ItemArea/${this.props.category_id}`}><li className="category-item" id="clothes" onClick={this.handleClick} style={this.state.category_id === "clothes" ? this.category_style : null} >Clothes</li></Link>
                    <Link to={`/ItemArea/${this.props.category_id}`}><li className="category-item" id="tech" onClick={this.handleClick} style={this.state.category_id === "tech" ? this.category_style : null}>Tech</li></Link>
                    </ul>
    
                </nav>
                <img className="brand" src={logo} alt="brand"></img>
                <span>
    
                <div  className="currency">
                <span className="currency-btn"  onClick={this.handleCurrency}> {symbols[this.props.currency_state]} <button className={`currency-drop-arrow ${this.state.is_dropDown_clicked && "flip-drop-arrow"}`} style={this.dropDown_arrow_url}></button> </span>
                
                <div id="currency_content" className={`dropdown-content ${this.state.is_dropDown_clicked && "show"}`}>
                    <li  id="0" className="currency-item"  onClick={this.handleCurrency_convert}>$ USD </li>
                    <li  id="1" className="currency-item" onClick={this.handleCurrency_convert}>£ GBP </li>
                    <li  id="2" className="currency-item" onClick={this.handleCurrency_convert}>A$ AUD</li>
                    <li  id="3" className="currency-item" onClick={this.handleCurrency_convert}>¥ JPY </li>
                    <li  id="4" className="currency-item" onClick={this.handleCurrency_convert}>₽ RUB</li>
                </div>  
                </div>
                <button className="cart-btn" style={this.cart_url} onClick={this.handleCart}  ><span className="basket_count_shape"  ><p className="basket_count_number">{this.props.item_count}</p></span></button>
    
                </span>
                {this.props.mini_cart_state && <div  onClick={this.handle_overlay}   id="overlay">
                 <MiniCart  />
    
                </div>}             
                </div>                
                
            );
    }
}

const mapStateToProps = (state)=>{
    return {
        item_count:state.increase_item,
        mini_cart_state:state.mini_cart_state,
        category_id:state.change_category,
        product_sum:state.product_sum,
        currency_state:state.change_currency
        
    }
}
const mapDispatchToProps = ()=>{
    return{
        mini_cart_click:ON_CLICK,
        change_category:CHANGE_CATEGORY,
        change_currency:CHANGE_CURRENCY,

        
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Header);