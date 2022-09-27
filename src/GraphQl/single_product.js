import {gql} from "apollo-boost";

const PRODUCT_FETCH_QUERY = gql`
  query($id: String!){
    product(id: $id){
      id,
      name,
      inStock,
      gallery,
      description,
      category,
      attributes{
        id,
        name,
        type,
        items{
          displayValue,
          value,
          id
        }
        
      },
      prices{
        currency{
          label,
          symbol
        }
        amount
      }
      brand

    }
 
}

`

export default PRODUCT_FETCH_QUERY