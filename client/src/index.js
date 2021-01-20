import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById("root")
);
