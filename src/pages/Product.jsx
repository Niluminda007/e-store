import React,{Component} from "react";
import Attributes from "../components/Attributes";
import ImageReel from "./ImageReel";
import {connect} from "react-redux";
import {INCREASE_ITEM,ADD_PRODUCT,ADD_TO_CART,FETCH_PRODUCT_ID,FETCH_ITEM,UPDATE_CART} from "../Actions";

class Product extends Component{

    isCloth = false

    checkIfColor(attr_item){
        if(attr_item === "Color"){
            return true;
        }
        else{
            return false;
        }
    }

    handleAdd=(e)=>{

        const {id} = e.target;
        const product_id = id.replace('-product-add','')
        this.props.increase_item(1)
        this.props.add_product(this.props.product.prices[0].amount)
         
        var items = this.props.products.array

        let is_added = false

        this.props.cart_items["items"].forEach( cart_item => {
            if(cart_item.id == product_id){
                is_added = true
                cart_item.count+=1
                this.props.update_cart({["id"]:cart_item.id,["product"]:cart_item})

            }     
        });
        
        if(!is_added){
            var added_Item = items.filter( item =>{
                return item.id == product_id 
            } )
            let [item] = added_Item
            item["count"] = 1
             
            this.props.add_to_cart(item);
            
        }  

    }
 
    displayItemAttributes(){
        
        this.isCloth = (this.props.product.item_name ==="Jacket")
    
        return (
            this.props.product.attributes.map((attr_list)=> {
            
            const isColor = this.checkIfColor(attr_list.name)
            
            if(isColor){
                return(         
                    <Attributes attr_list_id={attr_list.id}  click={this.storeAttr} key={attr_list.id} attr_list={attr_list} sub_attr_class="attribute-sub-item-color" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_color_style" item_name={this.props.product.name} isCloth={this.isCloth}  />
                )
            }
            else{
                return (
                    <Attributes attr_list_id={attr_list.id} click={this.storeAttr} key={attr_list.id} attr_list={attr_list} sub_attr_class="attribute-sub-item-normal" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_normal_style" item_name={this.props.product.name} isCloth={this.isCloth}   />
                )
            }       
            })
        );
    }

    render(){
        return(
            <div className="product-container">
            
            <ImageReel img_list={this.props.product.gallery}/>
            <div className="product-body">
            <p className="item-brand">{this.props.product.brand}</p>
            <p className="item-name">{this.props.product.name}</p>
            {this.displayItemAttributes()}

            <p className="item-price-head">PRICE: <br/><small className="item-price">{this.props.product.prices[0].currency.symbol}{this.props.product.prices[this.props.currency_id].amount}</small></p>
            <button className="item-add-btn" id={`${this.props.product.id}-product-add`} onClick={this.handleAdd}>ADD TO CART</button>

            <div className="item-descrip" dangerouslySetInnerHTML={{__html:this.props.product.description}}></div>
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        currency_id:state.change_currency,
        cart_items:state.add_toCart,
        item_id:state.fetch_product,
        add_Item:state.item_counter,
        products:state.init_products
        
    }
}

const mapDispatchToProps = ()=>{
    return{
        add_to_cart:ADD_TO_CART,
        increase_item:INCREASE_ITEM,
        add_product:ADD_PRODUCT,
        fetch_item_id:FETCH_PRODUCT_ID,
        fetch_item:FETCH_ITEM,
        update_cart:UPDATE_CART,
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Product)
