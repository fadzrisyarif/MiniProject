import { gql } from '@apollo/client'
export const sendOrderQuery = gql`
mutation MyMutation($email:String!, $name:String!) {
    insert_order_one(object: {email: $email, name: $name}) {
      id
    }
  }
`
