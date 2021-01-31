import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profiles-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    // don't write the bracket on the next line
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return < MyPosts updateNewPostText = {onPostChange}
                                 addPost = {addPost}
                                 posts = {state.profilePage.posts}
                                 newPostText = {state.profilePage.newPostText}/>
            }
        }
    </StoreContext.Consumer>

}

