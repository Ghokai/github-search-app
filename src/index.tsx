import "antd/dist/antd.css";
import "./app.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./components/App";

const store = configureStore();

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(wrapper, document.getElementById("root"));
