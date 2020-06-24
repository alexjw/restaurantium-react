import React, { useState } from "react";
import {gql} from "apollo-boost";
import {Query, QueryResult} from 'react-apollo';

interface typeOfData {
    ingredients: {
        _id: string,
        name: string
    }[]
}

interface Props {
    ingredients: {
        _id: string,
        name: string
    }[]
}

interface Ingredient {
    _id: string;
    name: string;
}


const IngredientsPage = (props) => {

    const [ingredients , setIngredients] = useState([]);

    const theQuery = gql`
        {
            ingredients {
                _id,
                name
            }
        }
    `;

    return (
        <div>
            <h1>The Ingredients Page</h1>
            <Query query={theQuery}>
                {
                    (something: QueryResult<typeOfData>) => {
                        if(!something.loading)
                            setIngredients(something.data.ingredients);
                        return null;
                    }
                }
            </Query>
            <ul>
                {ingredients.map(ingredient => <li>{ingredient.name} - {ingredient._id}</li>)}
            </ul>
        </div>
    )
}

export default IngredientsPage;
