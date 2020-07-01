import React, {useEffect, useState} from "react";
import { useQuery, useMutation, useSubscription  } from '@apollo/react-hooks';
import IngredientCreateEdit from "./ingredientCreateEdit";
import {DELETE_INGREDIENT, GET_INGREDIENTS} from "../queries/ingredients";
import {GetIngredientsQuery, Ingredient} from "../types";
import {Link, RouteComponentProps} from "react-router-dom";

const IngredientsPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetIngredientsQuery>( GET_INGREDIENTS );

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
