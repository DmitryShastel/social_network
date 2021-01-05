import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import React from "react";
import store from "./redux/state"
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
            <App state={state} dispatch={store.dispatch.bind(store)}
            />
            {/*</React.StrictMode>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);




