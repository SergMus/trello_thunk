import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
