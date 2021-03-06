import React, {useEffect, useState} from 'react';
//import './App.css';
import {Route, RouteComponentProps, Switch} from 'react-router-dom'
import HomePage from "./components/homePage";
import IngredientsPage from "./components/ingredientsPage";
import IngredientView from "./components/ingredientView";
import IngredientCreateEdit from "./components/ingredientCreateEdit";
import './stylesheets/App.sass'
import TheNavBar from "./components/theNavBar";
import ClientsPage from "./components/clientsPage";
import TheFooter from "./components/theFooter";
import MealsPage from "./components/mealsPage";
import MealView from "./components/mealView";


const App = () => {

    const [get, set] = useState('DefaultValue'); // The example of Hooks

    // The example of useEffect, when something changes/re renders / or whenever a set of UseState is called
    useEffect(() => {
        console.log('Component did mount')
    }, []); // Similar to ComponentDidMount, if you watch set, it will be called if set is called

    return (
        <div className="App">
            <TheNavBar/>
            <div className='app-container'>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/ingredients' component={IngredientsPage}/>
                    <Route exact path='/ingredients/new' component={IngredientCreateEdit}/>
                    <Route exact path='/ingredients/:id' component={IngredientView}/>
                    <Route exact path='/ingredients/:id/edit' component={IngredientCreateEdit}/>
                    <Route exact path='/clients' component={ClientsPage}/>
                    <Route exact path='/meals' component={MealsPage}/>
                    <Route exact path='/meals/:id' component={MealView}/>
                </Switch>
            </div>
            <TheFooter/>
        </div>
    )
};

export default App;
