import React, {useEffect, useState} from "react";
import { useQuery, useMutation, useSubscription  } from '@apollo/react-hooks';
import CreateIngredient from "./createIngredient";
import {DELETE_INGREDIENT, GET_INGREDIENTS} from "../queries/ingredients";
import {GetIngredientsQuery} from "../types";


export interface Ingredient {
    _id: string;
    name: string;
    measureUnit: string;
}

export interface theInput {
    name: string;
    measureUnit: string;
}

const IngredientsPage = (props) => {

    //const [ingredients , setIngredients] = useState<Ingredient[]>([]);
    const [ingredient, setIngredient] = useState<Ingredient>(null);

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
                                <button onClick={() => setIngredient(ingredient)}>Edit</button>
                                <button onClick={() => deleteIngredient({variables: {_id: ingredient._id}})}>
                                    Delete
                                </button>
                            </li>)
                        )
                }
            </ul>
            <h3>Add Ingredient</h3>
            <CreateIngredient ingredient={ingredient}/>
        </div>
    )
};

export default IngredientsPage;
