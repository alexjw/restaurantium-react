import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/homePage";
import IngredientsPage from "./components/ingredientsPage";


const App = (props) => {

    const [get, set] = useState('DefaultValue'); // The example of Hooks

    // The example of useEffect, when something changes/re renders / or whenever a set of UseState is called
    useEffect(() => {
        console.log('Component did mount')
    }, []); // Similar to ComponentDidMount, if you watch set, it will be called if set is called

    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/ingredients' component={IngredientsPage}/>
            </Switch>
        </div>
    )
};

export default App;
