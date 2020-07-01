import {gql} from "apollo-boost";

export const GET_INGREDIENTS = gql`
    query getIngredients {
        ingredients {
            _id,
            name,
            measureUnit
        }
    }
`;

export const SAVE_INGREDIENT = gql`
    mutation createIngredient($input: CreateIngredientInput!) {
        createIngredient(createIngredientInput: $input) {
            _id, name
        }
    }
`;

export const DELETE_INGREDIENT = gql`
    mutation deleteIngredient($_id: String!) {
        deleteIngredient(_id: $_id)
    }
`;

export const EDIT_INGREDIENT = gql`
    mutation editIngredient($_id: String!, $name: String, $measureUnit: String){
        editIngredient(_id: $_id, name: $name, measureUnit: $measureUnit) {
            _id, name, measureUnit
        }
    }
`;

export const FIND_INGREDIENT = gql`
    query findIngredient($_id: String!) {
        ingredient(_id: $_id) {
            _id, name, measureUnit
        }
    }
`;
