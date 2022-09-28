import React, {Component} from "react";
import AttributeColumn from "./AttributeColumn";
import clothSizes from "./ClothSizes";
import {connect} from "react-redux";
import { STORE_ATTRIBUTE,UPDATE_STORED_ATTRIBUTE } from "../Actions";

class Attributes extends Component{

    constructor(props){
        super(props)
        this.state={
            clicked_attribute_id:"",
            clicked_attribute_ids:[],
            clicked_attribute_value:"",
            
        }       
    }
    
    item_sizes = []

    display_selected_items(){

        if(this.props.chosen_attrs.length != 0 ){ 
    
                this.props.chosen_attrs.forEach( attr => {
                    let item = document.getElementById(attr)
                    if (item != null){
                        if(attr.includes("Color")){
                            document.getElementById(attr).classList.add("cilcked_color_style")
                        }
                        else{
                            document.getElementById(attr).classList.add("cilcked_normal_style")
                        }
                    }
                    
                });
       }  
            
        }
    


    handleClick=(e)=>{
        const {id,value} = e.target;
        
        this.setState(
            {
                clicked_attribute_id:id,
                clicked_attribute_ids:[...this.state.clicked_attribute_ids , id],
                clicked_attribute_value :value, 

            }) 

    }
    componentDidUpdate(){
        if(this.state.clicked_attribute_id !== ""){
            let id = this.state.clicked_attribute_id

            let attr_id = id.split('-').pop()
            let item_name = id.substring(0,id.indexOf('_'))

            this.props.chosen_attrs.forEach( attr =>{
               

                if(attr.includes(attr_id) &&attr.includes(item_name)){
                   
                    this.props.update_user_choice(attr)

                    if(attr.includes("Color")){
                        document.getElementById(attr).classList.remove("cilcked_color_style")

                    }
                    else{
                        document.getElementById(attr).classList.remove("cilcked_normal_style")
                    }             
                }

            })
            
        }

    }


    componentWillUnmount(){
        if(this.state.clicked_attribute_id !== ""){
            this.props.store_user_choice(this.state.clicked_attribute_id)
        }
        
    }

    componentDidMount(){
        this.display_selected_items()
    }

    render(){
       this.display_selected_items()
       
        
        if(this.props.isCloth){
            this. item_sizes = clothSizes
            
        }
        else{
            this. item_sizes = this.props.attr_list.items

        }
        return(
            <div key={this.props.attr_list.id} className="cart-item-attributes" > 
            <h4 className="item-attr-heading">{this.props.attr_list.name}:</h4>                  
                <p  className="attribute-sub-items">
                
                    {this.item_sizes.map( (item)=>{
    
                         var sub_item_id = `${this.props.item_name}_${item.id}-${this.props.attr_list.id}`
                         this.item_id = this.props.attr_list.id
                         this.item_value = item.value
                         
                        {/* console.log(this.state.clicked_attribute_id === sub_item_id) */}
                         return(
                            <AttributeColumn item_id={this.props.item_id} key={item.id}
                             attr_li_id={this.props.attr_list.id}
                               onClick={this.handleClick} id={sub_item_id}
                                 attribute={item} attr_list_id={this.props.attr_list.id}
                                  value={this.props.attr_list.name} 
                                  class={`${this.props.sub_attr_class} ${ this.state.clicked_attribute_id === sub_item_id ? this.props.sub_attr_clicked_colorStyle: ""} `}  isColor={this.props.checkColor} display_value={item.value} storeAttr={this.props.storeAttr} />
                            
                             )} )
                    }
                </p> 
        </div> 
            
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        chosen_attrs:state.store_attr,
        products:state.add_toCart
    }

}


const mapDispatchToProps = ()=>{
    return {
        store_user_choice:STORE_ATTRIBUTE,
        update_user_choice:UPDATE_STORED_ATTRIBUTE
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Attributes);