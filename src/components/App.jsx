import React, {Component} from "react";
import Header from "./Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ItemArea from "./ItemArea";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { connect } from "react-redux";


const client = new ApolloClient({
    uri:"http://localhost:4000/graphql",
    
}
);

class App extends Component{
    
    render(){
        
        return(

            <ApolloProvider client={client}>
            <Router>
            <div className="container">
            <Header />
            <Switch>
              <Route exact path={`/`} component={ItemArea} />
              <Route path={`/ItemArea/:id` } component={ItemArea}/>
              <Route path='/Cart' component={Cart} />
              <Route path={`/Products/:id`} component={ProductPage}/>

            </Switch>
            </div>
            </Router>
            </ApolloProvider>
            
           
           
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        product:state.get_item,
        categoryID:state.change_category,
        product_id:state.fetch_product
    }
}


export default connect(mapStateToProps,null)(App);