import {gql} from "apollo-boost";

export const GET_MEALS = gql`
    query getMeals {
        meals {
            _id, name, sizes, details {
                ingredient {
                    _id, measureUnit, name
                },
                quantity
            }
        }
    }
`;

export const FIND_MEAL = gql`
    query findMeal($_id: String!) {
        meal(_id: $_id) {
            _id,
            name,
            details {
                ingredient {
                    _id, measureUnit, name
                },
                quantity
            },
            sizes
        }
    }
`;
