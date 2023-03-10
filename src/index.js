import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

// import configureStore from "./redux/configureStore";
import store from "./redux/store";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = configureStore();


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode >
);



