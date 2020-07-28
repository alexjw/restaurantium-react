import React from "react";
import {RouteComponentProps} from "react-router-dom";
import Button from "react-bootstrap/cjs/Button";
import '../stylesheets/IngredientCard.sass'

interface TheProps{
    ingredient: {
        _id, name
    },
    deleteFunc: Function,
    viewFunc: (id: string) => void,
    editFunc: (id: string) => void
}

const IngredientCard = (props: TheProps) => {

    return (
        <div className='ingredient-card'>
            Photo<br/>
            {props.ingredient.name}<br/>
            <Button variant='info' onClick={() => props.viewFunc(props.ingredient._id)}>View</Button>
            <Button variant='success' onClick={() => props.editFunc(props.ingredient._id)}>Edit</Button>
            <Button variant='warning' onClick={() => props.deleteFunc({variables: {_id: props.ingredient._id}})}>Delete</Button>
        </div>
    )
};

export default IngredientCard;