import React from "react";
import {sendMessageCreator, updateNewMessagebodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessagebodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange}
                 sendMessage = {onSendMessageClick}
                 dialogsPage = {state}/>
    )
}

