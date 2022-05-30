import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

