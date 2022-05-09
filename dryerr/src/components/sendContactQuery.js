import { gql } from '@apollo/client'
import React from 'react'

export const sendContactQuery = gql`
mutation MyMutation ($email:String!, $message:String!){
    insert_contact_one(object: {email: $email, message: $message}){
      id
    }
  }
  
`
