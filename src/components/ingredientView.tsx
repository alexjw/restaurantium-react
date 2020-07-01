import React, {useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import Spinner from "./spinner";
import {FIND_INGREDIENT} from "../queries/ingredients";
import {FindIngredientQuery} from "../types"
import {RouteComponentProps} from "react-router-dom";


const IngredientView = (props: RouteComponentProps<{id: string}>) => {

    console.log(props);

    //const [ingredient, setIngredient] = useState<Ingredient>(props.ingredient);
    const findQuery = useQuery<FindIngredientQuery>(FIND_INGREDIENT, {variables: {_id: props.match.params.id}});

    if(findQuery.loading)
        return <Spinner/>;

    if(findQuery.error)
        return <p>Error loading data</p>;

    return (
        <div>
            <h3>Ingredient</h3>
                <div>
                    <p>id: {findQuery.data.ingredient._id}</p>
                    <p>name: {findQuery.data.ingredient.name}</p>
                    <p>measure unit: {findQuery.data.ingredient.measureUnit}</p>
                </div>
        </div>
    )
};

export default IngredientView;
