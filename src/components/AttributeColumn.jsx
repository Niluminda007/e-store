import React, { Component } from "react";

class AttributeColumn extends Component{

    constructor(props){
        super(props)

    }
    
    handleClick=(e)=>{
        this.props.onClick(e)
        
    }

    render(){
        
        if(this.props.isColor){
            var color_value = this.props.attribute.value;
        }

        return(
            
            <button key={this.props.attribute.id} value={this.props.display_value} id={this.props.id} className={`${this.props.class}`} style={this.props.isColor ? {backgroundColor:color_value}:{}} onClick={this.handleClick} >
                {!this.props.isColor&&this.props.display_value}
            </button>  
        )
    }
    
}
export default AttributeColumn;