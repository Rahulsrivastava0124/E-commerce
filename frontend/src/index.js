import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/Index";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import AppContainer from "./containers/AppContainer";


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const client = new ApolloClient({
  uri: "http://localhost:4400/",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    authorization: localStorage.getItem("Token") || ""
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
