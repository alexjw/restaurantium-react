import React, {useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import {Ingredient} from "./ingredientsPage";
import {FIND_INGREDIENT} from "../queries/ingredients";

interface IngredientData {
    ingredient: Ingredient
}

const IngredientView = (props) => {

    console.log(props);

    //const [ingredient, setIngredient] = useState<Ingredient>(props.ingredient);
    const findQuery = useQuery<{ingredient: Ingredient}>(FIND_INGREDIENT, {variables: {_id: props.match.params.id}});

    return (
        <div>
            <h3>Ingredient</h3>
            {
                findQuery.loading ?
                    <p>Loading...</p> :
                    (
                        <div>
                            <p>{findQuery.data.ingredient._id}</p>
                            <p>{findQuery.data.ingredient.name}</p>
                            <p>{findQuery.data.ingredient.measureUnit}</p>
                        </div>
                    )
            }
        </div>
    )
};

export default IngredientView;
