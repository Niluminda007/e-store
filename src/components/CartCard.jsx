

import React,{Component} from "react";
import Attributes from "./Attributes";
import ItemCounter from "./ItemCounter";
import ImageSlider from "./ImageSlider";
import { UPDATE_CART } from "../Actions";
import {connect} from "react-redux";


class CartCard extends Component {
    constructor(props){
        super(props)
        
     
    }
    isCloth = false

    checkIfColor(attr_item){
        if(attr_item === "Color"){
            return true;
        }
        else{
            return false;
        }
    }

    storeAttr= (e,attr_id)=>{

        const {id,value} = e.target;
        let item_id = this.props.id
        let key = attr_id

        let {items} = this.props.cart_products

        let [selected_item] = items.filter( item =>{ return item.id == item_id})
        
        selected_item.chosen_attr[attr_id] = value
        this.props.update_cart({["id"]:item_id,["product"]:selected_item})
        
        
       
    }
    
    displayItemAttributes(){
        
        this.isCloth = (this.props.item_name ==="Jacket")
        
        return (
        this.props.attributes.map((attr_list)=> {
            
            const isColor = this.checkIfColor(attr_list.name)
            
            
            if(isColor){
                return(         
                    <Attributes attr_list_id={attr_list.id} click={this.storeAttr} key={attr_list.id} attr_list={attr_list} sub_attr_class="attribute-sub-item-color" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_color_style" item_name={this.props.item_name} isCloth={this.isCloth}  item_id={this.props.id} />
                )
            }
            else{
                return (
                    <Attributes attr_list_id={attr_list.id} click={this.storeAttr} key={attr_list.id} attr_list={attr_list} sub_attr_class="attribute-sub-item-normal" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_normal_style" item_name={this.props.item_name} isCloth={this.isCloth}  />
                )
            }       
            })
        );
    }

    render(){
    
        return (
            <div  key={this.props.id} id={this.props.id} className="cart-item"  >
     
               <div className="cart-item-footer">
                    <p className="cart-item-brand">{this.props.brand} </p>
                    <p className="cart-item-name"> {this.props.item_name}</p>
                    <p className="cart-item-price"> {this.props.price.currency.symbol}{this.props.price.amount} </p>
                    { this.displayItemAttributes()  }      
                  </div>         
                          
            <div className="cart-item-header">           
                <ImageSlider img_list={this.props.images} />             
                <ItemCounter price={this.props.price.amount} item_id={this.props.id} count={this.props.count} />
            </div>           
            </div>
        );

    }
}

const mapStateToProps =(state)=>{
    return {
        cart_products:state.add_toCart
    }
}
const mapDispatchToProps = ()=>{
    return{
        update_cart:UPDATE_CART
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(CartCard);