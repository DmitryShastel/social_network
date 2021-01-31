import ReactDOM from 'react-dom';
import React from "react";
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});




