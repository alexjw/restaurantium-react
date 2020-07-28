import React from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
    DeleteIngredientMutation,
    DeleteIngredientMutationResult,
    DeleteIngredientMutationVariables,
    GetIngredientsIngredientsPageQuery,
    Ingredient
} from "../types";
import {Link, RouteComponentProps} from "react-router-dom";
import {gql} from "apollo-boost";
import {DELETE_INGREDIENT} from "../queries/ingredients";
import IngredientCard from "./ingredientCard";

const GET_INGREDIENTS = gql`
    query getIngredientsIngredientsPage {
        ingredients {
            _id, name
        }
    }
`;

const IngredientsPage = (props: RouteComponentProps) => {

    const { loading, data } = useQuery<GetIngredientsIngredientsPageQuery>( GET_INGREDIENTS );

    const [deleteIngredient, deletedIngredient] = useMutation<
        DeleteIngredientMutation,
        DeleteIngredientMutationVariables
        >(DELETE_INGREDIENT, {
            refetchQueries: [{query: GET_INGREDIENTS}]
    });

    const viewFunc = (id: string) => {
        props.history.push('/ingredients/' + id)
    };

    const editFunc = (id: string) => {
        props.history.push('/ingredients/' + id + '/edit')
    };

    return (
        <div>
            <h1>The Ingredients Page</h1>
            {
                deletedIngredient.data && deletedIngredient.data.deleteIngredient ? <p>Deleted!</p> : null
            }
            <div className='d-flex flex-wrap'>
                {
                    loading ?
                        <p>Loading...</p> :
                        data.ingredients.map(ingredient => <IngredientCard ingredient={ingredient} deleteFunc={deleteIngredient} viewFunc={viewFunc} editFunc={editFunc} />)
                }
            </div>

            <Link to='ingredients/new'>New</Link>
        </div>
    )
};

export default IngredientsPage;
