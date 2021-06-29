import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import configureStore from "./store";

console.log("Test");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
