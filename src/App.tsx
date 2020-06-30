import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/homePage";
import IngredientsPage from "./components/ingredientsPage";
import IngredientView from "./components/ingredientView";
import Header from "./components/header";


const App = (props) => {

    const [get, set] = useState('DefaultValue'); // The example of Hooks

    // The example of useEffect, when something changes/re renders / or whenever a set of UseState is called
    useEffect(() => {
        console.log('Component did mount')
    }, []); // Similar to ComponentDidMount, if you watch set, it will be called if set is called

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/ingredients' component={IngredientsPage}/>
                <Route exact path='/ingredients/:id' component={IngredientView}></Route>
            </Switch>
        </div>
    )
};

export default App;
