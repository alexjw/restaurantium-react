import React from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GetIngredientsIngredientsPageQuery, Ingredient} from "../types";
import {Link, RouteComponentProps} from "react-router-dom";
import {gql} from "apollo-boost";
import {DELETE_INGREDIENT} from "../queries/ingredients";

const GET_INGREDIENTS = gql`
    query getIngredientsIngredientsPage {
        ingredients {
            _id, name
        }
    }
`;

const IngredientsPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetIngredientsIngredientsPageQuery>( GET_INGREDIENTS );

    const [deleteIngredient, deletedIngredient] = useMutation<
        {deleteIngredient: boolean},
        { _id: string }
        >(DELETE_INGREDIENT, {
            refetchQueries: [{query: GET_INGREDIENTS}]
    });

    return (
        <div>
            <h1>The Ingredients Page</h1>
            <p>Hooks</p>
            {
                deletedIngredient.data && deletedIngredient.data.deleteIngredient ? <p>Deleted!</p> : null
            }
            <ul>
                {
                    loading ?
                        <p>Loading...</p> :
                        data.ingredients.map(ingredient => (
                            <li key={ingredient._id}>{ingredient.name} - {ingredient._id}
                                <button onClick={() => props.history.push('/ingredients/' + ingredient._id)}>View</button>
                                <button onClick={() => props.history.push('/ingredients/' + ingredient._id + '/edit')}>Edit</button>
                                <button onClick={() => deleteIngredient({variables: {_id: ingredient._id}})}>
                                    Delete
                                </button>
                            </li>)
                        )
                }
            </ul>
            <Link to='ingredients/new'>New</Link>
        </div>
    )
};

export default IngredientsPage;
