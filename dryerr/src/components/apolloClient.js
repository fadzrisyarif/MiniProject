import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://pleasing-cobra-88.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':'RkJN6gjnAYuEvw4k3A9G90ykjdOJRbOJg77R4oXR0HgvIRXk49T6q0kypfJPxRjo'
    },
})

export default client