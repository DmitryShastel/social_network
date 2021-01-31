import React from "react";
import {sendMessageCreator, updateNewMessagebodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    // don't write the bracket on the same line
    return <StoreContext.Consumer>
        {(store) => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessagebodyCreator(body));
            }

            return (
                <Dialogs updateNewMessageBody = {onNewMessageChange}
                         sendMessage = {onSendMessageClick}
                         dialogsPage = {store.getState().dialogsPage}/>)
        }
        }
    </StoreContext.Consumer>
}


