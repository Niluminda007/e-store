import React,{Component} from "react";
import Attributes from "../components/Attributes";
import ItemCounter from "../components/ItemCounter";


class MiniCartCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            item_count:1,
            
        }

       
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
    


    componentDidUpdate(){
        // console.log(this.state)
    }


    displayItemAttributes(){
        
        this.isCloth = (this.props.item_name ==="Jacket")
        
        return (
        this.props.attributes.map((attr_list)=> {
            
            const isColor = this.checkIfColor(attr_list.name)
            
            if(isColor){
                return(         
                    <Attributes key={attr_list.id} attr_list={attr_list} sub_attr_class="mini-attribute-sub-item-color" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_color_style" item_name={this.props.item_name} isCloth={this.isCloth} isMiniCart={true}  />
                )
            }
            else{
                return (
                    <Attributes key={attr_list.id} attr_list={attr_list} sub_attr_class="mini-attribute-sub-item-normal" checkColor={isColor} sub_attr_clicked_colorStyle="cilcked_normal_style" item_name={this.props.item_name} isCloth={this.isCloth} isMiniCart={true}    />
                )
            }       
            })
        );
    }
    render(){
       
        
        return(
            <div  key={this.props.id} id={this.props.id} className="mini-cart-item"  >
     
               <div className="mini-cart-item-header">
                    <p className="mini-cart-item-brand">{this.props.brand} </p>
                    <p className="mini-cart-item-name"> {this.props.item_name}</p>
                    <p className="mini-cart-item-price"> {this.props.price.currency.symbol}{this.props.price.amount} </p>
                    { this.displayItemAttributes()  }  
                  </div>         
                          
            <div className="mini-cart-item-footer">           
                           
                <ItemCounter price={this.props.price.amount} product_id={this.props.id} isMiniCart={true} count={this.props.count} item_id={this.props.id}  />
                <img className="mini-item-img" src={this.props.images[0]} />
            </div>           
            </div>
           
        );

    }
}

export default MiniCartCard