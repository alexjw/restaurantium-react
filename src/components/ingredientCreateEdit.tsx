import React, {useEffect, useState} from "react";
import {useMutation, useLazyQuery} from "@apollo/react-hooks";
import {
    DELETE_INGREDIENT,
    EDIT_INGREDIENT,
    FIND_INGREDIENT,
    GET_INGREDIENTS,
    SAVE_INGREDIENT
} from "../queries/ingredients";
import {
    CreateIngredientInput,
    EditIngredientMutation,
    EditIngredientMutationVariables, FindIngredientProps, FindIngredientQuery, FindIngredientQueryVariables,
    Ingredient
} from "../types";
import {RouteComponentProps} from "react-router-dom";
import Spinner from "./spinner";

interface TheParams {
    id: string
}

interface TheProps extends RouteComponentProps<TheParams> {

}

const IngredientCreateEdit = (props: TheProps) => {

    const [name, setName] = useState('');
    const [measureUnit, setMeasureUnit] = useState('');
    const [loadIngredient, loadResult] = useLazyQuery<FindIngredientQuery, FindIngredientQueryVariables>(FIND_INGREDIENT);
    const [createIngredient, savedResult] = useMutation<
        { createIngredient: Ingredient },
        { input: CreateIngredientInput }
        >(SAVE_INGREDIENT, {
        variables: {
            input: {
                name,
                measureUnit
            }
        }, refetchQueries: [{query: GET_INGREDIENTS}]
    });
    const [editIngredient, editedResult] = useMutation<
        EditIngredientMutation,
        EditIngredientMutationVariables>(EDIT_INGREDIENT, {
            refetchQueries: [{query: GET_INGREDIENTS}]
    });

    useEffect(() => { // Component did mount
        if(props.match.params.id)
            loadIngredient({variables: {_id: props.match.params.id}});
    }, []);

    useEffect(() => {
        if(loadResult.data){
            setName(loadResult.data.ingredient.name);
            setMeasureUnit(loadResult.data.ingredient.measureUnit);
        }
    }, [loadResult]);

    if(loadResult.loading || savedResult.loading)
        return <Spinner/>;

    const redirection = '/ingredients';

    return (
        <div>
            <form>
                    {
                        loadResult.data && loadResult.data.ingredient ?
                            <div>
                                <label>id:</label>
                                <label>{loadResult.data.ingredient._id}</label>
                            </div>
                            : null
                    }
                    <br/>
                    <label>Name:</label>
                    <input name="name" onChange={e => setName(e.target.value)} value={name} />
                    <br/>
                    <label>MeasureUnit:</label>
                    <input name="measure_unit" onChange={e => setMeasureUnit(e.target.value)} value={measureUnit} />
                    <button onClick={(event) => {
                        event.preventDefault();
                        if(loadResult.data && loadResult.data.ingredient) {
                            editIngredient({
                                variables: {
                                    _id: loadResult.data.ingredient._id,
                                    name: name,
                                    measureUnit: measureUnit
                                }
                            }).then(() => {
                                props.history.push(redirection);
                            });
                        }
                        else
                            createIngredient().then(value => {
                                props.history.push(redirection);
                            });
                    }}>{loadResult.data && loadResult.data.ingredient ? 'Edit' : 'Create'}</button>
            </form>
        </div>
    )
};

export default IngredientCreateEdit;
