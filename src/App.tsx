import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/homePage";
import IngredientsPage from "./components/ingredientsPage";

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            greeting: 'x'
        }
    }

    /*componentDidMount(): void {
        fetch(GRAPHQL_URL,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        query: `
                        query {
                            greeting
                        }`
                    }
                )
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({greeting: response.data.greeting});
            })
    }*/

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/ingredients' component={IngredientsPage}/>
                </Switch>
            </div>
        )
    }
}

export default App;
