import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/Index";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import AppContainer from "./containers/AppContainer";

// Configure store with Redux Toolkit for better performance
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// Configure Apollo Client with optimizations
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://localhost:4400/",
  cache: new InMemoryCache({ 
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          // Cache management for better performance
          products: {
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  headers: {
    authorization: localStorage.getItem("Token") || ""
  },
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'ignore',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
