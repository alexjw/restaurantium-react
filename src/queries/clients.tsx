import {gql} from "apollo-boost";

// Global queries with every field

export const GET_CLIENTS = gql`
    query getClients {
        clients {
            _id, firstName, lastName
        }
    }
`;
