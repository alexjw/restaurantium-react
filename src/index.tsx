import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';
import * as Constants from "./utils/constants";

const httpLink = createHttpLink(
    {
        uri: Constants.API_URL
    }
);

const cache = new InMemoryCache();

const client = new ApolloClient(
    {
        link: httpLink,
        cache
    }
);

client.query(
    {
        query: gql`
            {
                order(_id: "5eec0a4141c0cb30e00c51cf") {
                    _id,
                    total,
                    details {
                        item {
                            _id, name
                        },
                        meal {
                            name,
                            details {
                                ingredient {
                                    _id,
                                    name
                                },
                                quantity
                            }
                        },
                        size,
                        quantity
                    },
                    client {
                        lastName,
                        firstName
                    }
                }
            }
        `
    }
).then(result => {
    console.log(result.data)
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
