import {gql} from "apollo-boost";

const GET_CATEGORY = gql`
query($input: CategoryInput){
    category(input:{"title":$input}){
      name,
      products{
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
  }`

export default GET_CATEGORY