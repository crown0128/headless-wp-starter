import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';
import App from './components/App';
import Config from './config';
import { AUTH_TOKEN } from './constants';

const token = localStorage.getItem(AUTH_TOKEN);
const client = new ApolloClient({
  link: createHttpLink({
    uri: Config.gqlUrl,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
