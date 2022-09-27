import React, {Component} from "react";
import logo from "../images/brand.svg";
import cart from "../images/cart.svg";
import currency from "../images/currency.svg";
import {connect} from "react-redux";
import {ON_CLICK,CHANGE_CATEGORY,CHANGE_CURRENCY} from "../Actions";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={           
            category_id:"all",
            currency_id:"0"
           
        };

    }
    currency_url = {backgroundImage: 'url(' + currency + ')', backgroundRepeat: "no-repeat" };
    cart_url = {backgroundImage: 'url(' + cart + ')' , backgroundRepeat: "no-repeat"};
    category_style = {color:"#5ECE7B" , borderBottom:"solid 2px #5ECE7B"};

    
    handleClick = (e)=>{
        const {id} = e.target;
        this.props.change_category(id)
        
        

        this.setState({
            category_id:id
        });
       

    }


    handleCurrency = e=>{
        document.getElementById("currency_content").classList.toggle("show")
    }


    handleCurrency_convert = e=>{
        const {id} = e.target
        this.setState({
            currency_id:id
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
                
                <Link to={`/ItemArea/${this.state.category_id}`}><li className="category-item" id="all" onClick={this.handleClick} style={this.state.category_id === "all" ? this.category_style : null } >All</li></Link>
                <Link to={`/ItemArea/${this.state.category_id}`}><li className="category-item" id="clothes" onClick={this.handleClick} style={this.state.category_id === "clothes" ? this.category_style : null} >Clothes</li></Link>
                <Link to={`/ItemArea/${this.state.category_id}`}><li className="category-item" id="tech" onClick={this.handleClick} style={this.state.category_id === "tech" ? this.category_style : null}>Tech</li></Link>
                </ul>

            </nav>
            <img className="brand" src={logo} alt="brand"></img>
            <span>

            <div  className="currency">
            <button className="currency-btn" style={this.currency_url} onClick={this.handleCurrency}> </button>
            
            <div id="currency_content" className="dropdown-content">
                <li  id="0" className="currency-item"  onClick={this.handleCurrency_convert}>$ USD </li>
                <li  id="1" className="currency-item" onClick={this.handleCurrency_convert}>£ EUR </li>
                <li  id="2" className="currency-item" onClick={this.handleCurrency_convert}>A$ AUD</li>
                <li  id="3" className="currency-item" onClick={this.handleCurrency_convert}>¥ JPY </li>
                <li  id="4" className="currency-item" onClick={this.handleCurrency_convert}>₽ RUB</li>
            </div>  
            </div>
            <button className="cart-btn" style={this.cart_url} onClick={this.handleCart}  ><span className="basket_count_shape"  ><p className="basket_count_number">{this.props.item_count}</p></span></button>

            </span>
            
            
            </div>
            
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        item_count:state.increase_item,
        
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