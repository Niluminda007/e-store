import React , {Component} from "react";
import "./imageSlider.css"
import left_arrow from "../images/left_arrow.svg"
import right_arrow from "../images/right_arrow.svg"
class ImageSlider extends Component{

    constructor(props){
        super(props)
        
        this.state={
            img_index:0
        }
    }
    left_arrow_url = {backgroundImage: 'url(' + left_arrow + ')', backgroundRepeat: "no-repeat" ,backgroundPosition: "center"};
    right_arrow_url = {backgroundImage: 'url(' + right_arrow + ')', backgroundRepeat: "no-repeat",backgroundPosition: "center" };

    images_len = (this.props.img_list).length
    handleSlideRight = ()=>{
        this.setState( (prevState)=>{
            if(prevState.img_index ==this.images_len-1){
                return {img_index:0}
            }
            return {img_index:prevState.img_index + 1}
        }
            
        )
            
        
    }
    handleSlideLeft = ()=>{
        this.setState( (prevState)=>{
            if(prevState.img_index ==0){
                return {img_index:this.images_len-1}
            }
            return {img_index:prevState.img_index - 1}
        }
        )
            
        
    }
    render(){
        return(
            <div className="img-slider">
            
            
             
             <img className="slider-img" alt={"image"+this.state.img_index} src={this.props.img_list[this.state.img_index]}></img>
            {this.images_len != 1 && 
            <div className="slide-arrow-container">
                <button id="left-arrow" onClick={this.handleSlideLeft} style={this.left_arrow_url}></button>

                <button id="right-arrow" onClick={this.handleSlideRight} style={this.right_arrow_url}></button>
             
             </div> 
            }
             
             
            </div>
        )
    }
}
export default ImageSlider