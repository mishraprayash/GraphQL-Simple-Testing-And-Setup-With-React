import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"


// creatging a new instane of a ApolloClient, which interacts with our backend APi.

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Using ApolloProvider here to pass our new instance of client to the client attribute */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

