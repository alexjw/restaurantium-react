import React, {useEffect, useState} from "react";
import {gql} from "apollo-boost";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {Query, QueryResult} from 'react-apollo';

interface IngredientsData {
    ingredients: Ingredient[]
}

interface Ingredient {
    _id: string;
    name: string;
    measure_unit: string;
}

interface theInput {
    name: string;
    measureUnit: string;
}

const GET_INGREDIENTS = gql`
    {
        ingredients {
            _id,
            name
        }
    }
`;

const SAVE_INGREDIENT = gql`
    mutation createIngredient($input: CreateIngredientInput!) {
        createIngredient(createIngredientInput: $input) {
            name
        }
    }
`;


const IngredientsPage = (props) => {

    //const [ingredients , setIngredients] = useState([]);
    const [name, setName] = useState('');
    const [measureUnit, setMeasureUnit] = useState('');
    const [createIngredient, savedIngredient] = useMutation<
        { createIngredient: Ingredient },
        { input: theInput }
        >(SAVE_INGREDIENT, {
            variables: {
                input: {
                    name,
                    measureUnit
                }
            }
    });

    const { loading, data } = useQuery<IngredientsData>( GET_INGREDIENTS );

    return (
        <div>
            <h1>The Ingredients Page</h1>
            <ul>
                {
                    loading ?
                        <p>Loading...</p> :
                        data.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name} - {ingredient._id}</li>)
                }
            </ul>
            <h3>Add Ingredient</h3>
            {savedIngredient.error ? <p>Oh no! {savedIngredient.error}{console.log(savedIngredient.error)}</p> : null}
            {savedIngredient.data && savedIngredient.data.createIngredient ? <p>Saved!</p> : null}
            <form>
                <p>
                    <label>Name:</label>
                    <input
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        name="measure_unit"
                        onChange={e => setMeasureUnit(e.target.value)}
                    />
                </p>
                <button onClick={(event) => {
                    event.preventDefault();
                    return createIngredient();
                }}>
                    Add
                </button>
            </form>
        </div>
    )
};

export default IngredientsPage;
