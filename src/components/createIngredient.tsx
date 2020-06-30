import {Ingredient, theInput} from "./ingredientsPage";
import React, {useEffect, useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import {graphql} from "react-apollo";
import {gql} from "apollo-boost";
import {DELETE_INGREDIENT, EDIT_INGREDIENT, GET_INGREDIENTS, SAVE_INGREDIENT} from "../queries/ingredients";

interface TheProps {
    ingredient?: Ingredient;
}

const CreateIngredient = (props: TheProps) => {

    //console.log(props);

    const [name, setName] = useState('');
    const [measureUnit, setMeasureUnit] = useState('');
    const [ingredient, setIngredient] = useState<Ingredient>(props.ingredient);
    const [createIngredient, savedResult] = useMutation<
        { createIngredient: Ingredient },
        { input: theInput }
        >(SAVE_INGREDIENT, {
        variables: {
            input: {
                name,
                measureUnit
            }
        }, refetchQueries: [{query: GET_INGREDIENTS}]
    });
    const [editIngredient, editedResult] = useMutation<
        { editIngredient: Ingredient},
        { _id: string, name: string, measureUnit: string}>(EDIT_INGREDIENT, {
            refetchQueries: [{query: GET_INGREDIENTS}]
    });

    useEffect(() => {
        setIngredient(props.ingredient);
    }, [props]);

    useEffect(() => {
        setName(ingredient ? ingredient.name : '');
        setMeasureUnit(ingredient ? ingredient.measureUnit : '');
    }, [ingredient]);

    return (
        <div>
            {savedResult.error ? <p>Oh no! {savedResult.error}</p> : null}
            {savedResult.data && savedResult.data.createIngredient ? <p>Saved!</p> : null}
            <form>
                <p>
                    <label>id:</label>
                    <label>{ingredient ? ingredient._id : 'x'}</label>
                    <br/>
                    <label>Name:</label>
                    <input name="name" onChange={e => setName(e.target.value)} value={name} />
                    <br/>
                    <label>MeasureUnit:</label>
                    <input name="measure_unit" onChange={e => setMeasureUnit(e.target.value)} value={measureUnit} />
                </p>
                <button onClick={(event) => {
                    event.preventDefault();
                    if(ingredient){
                        editIngredient({
                            variables: {
                                _id: ingredient._id,
                                name: name,
                                measureUnit: measureUnit
                            }
                        }).then(() => setIngredient(null));
                    }
                    else
                        return createIngredient().then(value => console.log(value));
                }}>Add</button>
            </form>
        </div>
    )
};

export default CreateIngredient;
