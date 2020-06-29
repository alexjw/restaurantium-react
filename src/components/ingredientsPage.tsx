import React, {useEffect, useState} from "react";
import {gql} from "apollo-boost";
import { useQuery, useMutation, useSubscription  } from '@apollo/react-hooks';
import {Query, QueryResult, graphql } from 'react-apollo';
import CreateIngredient from "./createIngredient";
import {GET_INGREDIENTS} from "../queries/ingredients";

interface IngredientsData {
    ingredients: Ingredient[]
}

export interface Ingredient {
    _id: string;
    name: string;
    measureUnit: string;
}

export interface theInput {
    name: string;
    measureUnit: string;
}

interface subscriptionResult {
    ingredientAdded: Ingredient;
}

const INGREDIENT_CREATED_SUBSCRIPTION = gql`
    subscription IngredientAdded {
        ingredientAdded {
            _id,
            name
        }
    }
`;

interface TheProps {

}

const IngredientsPage = (props) => {

    const [ingredients , setIngredients] = useState([]);

    const { loading, data } = useQuery<IngredientsData>( GET_INGREDIENTS );

    console.log(props);

    return (
        <div>
            <h1>The Ingredients Page</h1>
            <p>Hooks</p>
            <ul>
                {
                    loading ?
                        <p>Loading...</p> :
                        data.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name} - {ingredient._id}</li>)
                }
            </ul>
            <p>Another way</p>
            <ul>
                {
                    props.data.loading ?
                        <p>Loading...</p> :
                        props.data.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name} - {ingredient._id}</li>)
                }
            </ul>
            <h3>Add Ingredient</h3>
            <CreateIngredient {...props}/>
        </div>
    )
};

export default graphql(GET_INGREDIENTS)(IngredientsPage);   // it gives props
