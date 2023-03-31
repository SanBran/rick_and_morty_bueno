import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import videoBg from "./Sources/AbleDelayedFieldmouse.mp4";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="video">
        <video src={videoBg} autoPlay muted loop />
      </div>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
