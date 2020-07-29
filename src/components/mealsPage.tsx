import React from "react";
import '../stylesheets/mealsPage.sass'
import {useMutation, useQuery} from "@apollo/react-hooks";
import {DeleteIngredientMutation, DeleteIngredientMutationVariables, GetMealsQuery} from "../types";
import {GET_MEALS} from "../queries/meals";
import Spinner from "./spinner";
import MealCard from "./mealCard";
import {RouteComponentProps} from "react-router-dom";

const MealsPage = (props: RouteComponentProps) => {

    const getMealsQuery = useQuery<GetMealsQuery>( GET_MEALS );

    const viewFunc = (id: string) => {
        props.history.push('/ingredients/' + id)
    };

    const editFunc = (id: string) => {
        props.history.push('/ingredients/' + id + '/edit')
    };

    if(getMealsQuery.loading)
        return <Spinner/>;

    return (
        <div>
            <h1>The Meals Page</h1>
            {
                getMealsQuery.data.meals.map(meal => <MealCard meal={meal} viewFunc={viewFunc} editFunc={editFunc} deleteFunc={() => ''}/>)
            }
        </div>
    )
};

export default MealsPage;
