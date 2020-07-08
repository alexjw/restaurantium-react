import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {GetIngredientsIngredientsPageQuery} from "../types";
import {gql} from "apollo-boost";

const GET_CLIENTS = gql`
    query getClients {
        clients {
            _id, firstName, lastName
        }
    }
`;

const ClientsPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetIngredientsIngredientsPageQuery>( GET_CLIENTS );

    return (
        <div>

        </div>
    )

};

export default ClientsPage;
