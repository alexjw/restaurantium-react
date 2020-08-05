import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {FindMealQuery} from "../types";
import {FIND_MEAL} from "../queries/meals";
import Spinner from "./spinner";

const MealView = (props: RouteComponentProps<{id: string}>) => {

    const findMealQuery = useQuery<FindMealQuery>(FIND_MEAL, {variables: {_id: props.match.params.id}});

    if(findMealQuery.loading)
        return <Spinner/>;

    return (
        <div>
            {findMealQuery.data.meal.name}
        </div>
    )
};

export default MealView;
