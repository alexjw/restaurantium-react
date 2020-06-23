import React from "react";
import {gql} from "apollo-boost";
import {Query, QueryResult} from 'react-apollo';

interface State {
    ingredients: {
        _id: string,
        name: string
    }[]
}

class IngredientsPage extends React.Component<any, State> {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        }
    }

    theQuery = gql`
        {
            ingredients {
                _id, 
                name
            }
        }
    `;

    render() {
        return (
            <div>
                <h1>The Ingredients Page</h1>
                <Query query={this.theQuery}>
                    {
                        (something: QueryResult) => {
                            if(!something.loading)
                                return <div>{something.data.ingredients.map(ingredient => (<li key={ingredient._id}>{ingredient._id} - {ingredient.name}</li>))}</div>;
                            return <div>Loading</div>
                        }
                    }
                </Query>
            </div>)
    }
}

export default IngredientsPage;
