import {gql} from "apollo-boost";

// Global queries with every field

export const GET_CLIENTS = gql`
    query getClients {
        clients {
            _id, firstName, lastName
        }
    }
`;

export const DELETE_CLIENT = gql`
    mutation deleteClient($_id: String!) {
        deleteClient(_id: $_id)
    }
`;
