import React, {useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import {Ingredient} from "./ingredientsPage";
import {FIND_INGREDIENT} from "../queries/ingredients";
import Spinner from "./spinner";

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
            <Spinner loading={findQuery.loading}>
                {
                    findQuery.loading ?
                        <p>Loading...</p> :
                        findQuery.error ? <p>Error loading data</p> :
                            <div>
                                <p>id: {findQuery.data.ingredient._id}</p>
                                <p>name: {findQuery.data.ingredient.name}</p>
                                <p>measure unit: {findQuery.data.ingredient.measureUnit}</p>
                            </div>
                }
            </Spinner>
        </div>
    )
};

export default IngredientView;
