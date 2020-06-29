import {Ingredient, theInput} from "./ingredientsPage";
import React, {useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import {graphql} from "react-apollo";
import {gql} from "apollo-boost";
import {GET_INGREDIENTS, SAVE_INGREDIENT} from "../queries/ingredients";



const CreateIngredient = (props) => {

    console.log(props);

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
        }, refetchQueries: [{query: GET_INGREDIENTS}]
    });

    return (
        <div>
            {savedIngredient.error ? <p>Oh no! {savedIngredient.error}</p> : null}
            {savedIngredient.data && savedIngredient.data.createIngredient ? <p>Saved!</p> : null}
            <form>
                <p>
                    <label>Name:</label>
                    <input name="name" onChange={e => setName(e.target.value)} />
                    <input name="measure_unit" onChange={e => setMeasureUnit(e.target.value)} />
                </p>
                <button onClick={(event) => {
                    event.preventDefault();
                    /*props.mutate({
                        variables:
                            {
                                input: {
                                    name,
                                    measureUnit
                                }
                            },
                        refetchQueries: [{query: GET_INGREDIENTS}]
                    }).then((something) => {
                        console.log(something);
                        props.history.push('/ingredients');
                    });*/

                    return createIngredient().then(value => console.log(value));
                }}>Add</button>
            </form>
        </div>
    )
};

export default graphql(SAVE_INGREDIENT)(CreateIngredient);
