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
