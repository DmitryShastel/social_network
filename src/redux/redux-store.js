import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profiles-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;