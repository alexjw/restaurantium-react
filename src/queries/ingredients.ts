import {gql} from "apollo-boost";

export const GET_INGREDIENTS = gql`
    {
        ingredients {
            _id,
            name
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
