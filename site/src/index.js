import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {} from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers"; // importando as tabelas do reducer
import thunk from "redux-thunk";

const storteWithMiddleware = applyMiddleware(thunk)(createStore);

const store = storteWithMiddleware(reducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
