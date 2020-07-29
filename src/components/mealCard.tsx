import React from "react";
import '../stylesheets/mealCard.sass'
import {Meal} from "../types";
import Button from "react-bootstrap/cjs/Button";

interface TheProps {
    meal: Meal,
    deleteFunc: Function,
    viewFunc: (id: string) => void,
    editFunc: (id: string) => void
}

const MealCard = (props: TheProps) => {

    return (
        <div className='meal-card'>
            {props.meal.name}<br/>
            <Button variant='info' onClick={() => props.viewFunc(props.meal._id)}>View</Button>
            <Button variant='success' onClick={() => props.editFunc(props.meal._id)}>Edit</Button>
            <Button variant='warning' onClick={() => props.deleteFunc({variables: {_id: props.meal._id}})}>Delete</Button>
        </div>
    )
};

export default MealCard;
