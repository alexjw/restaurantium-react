import React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {DeleteClientMutation, DeleteClientMutationVariables, GetClientsClientsPageQuery} from "../types";
import {gql} from "apollo-boost";
import Button from "react-bootstrap/cjs/Button";
import {DELETE_CLIENT} from "../queries/clients";

const GET_CLIENTS = gql`
    query getClientsClientsPage {
        clients {
            _id, firstName, lastName
        }
    }
`;

const ClientsPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetClientsClientsPageQuery>( GET_CLIENTS );

    const [deleteClient, deletedClient] = useMutation<
        DeleteClientMutation,
        DeleteClientMutationVariables
        >(DELETE_CLIENT, {
            refetchQueries: [{query: GET_CLIENTS}]
    });

    return (
        <div>
            <h1>The Clients Page</h1>
            <p>Hooks</p>
            {
                deletedClient.data && deletedClient.data.deleteClient ? <p>Deleted!</p> : null
            }
            <ul>
                {
                    loading ?
                        <p>Loading...</p> :
                        data.clients.map(client => (
                            <li key={client._id}>{client.firstName} {client.lastName}
                                <Button  onClick={() => props.history.push('/clients/' + client._id)}>View</Button>
                                <button onClick={() => props.history.push('/clients/' + client._id + '/edit')}>Edit</button>
                                <button onClick={() => deleteClient({variables: {_id: client._id}})}>
                                    Delete
                                </button>
                            </li>)
                        )
                }
            </ul>
            <Link to='clients/new'>New</Link>
        </div>
    )

};

export default ClientsPage;
