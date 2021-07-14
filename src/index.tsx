import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {/* // basename={process.env.PUBLIC_URL}> */}
      <App />
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
