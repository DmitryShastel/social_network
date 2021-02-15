import React from "react";
import {sendMessageCreator, updateNewMessagebodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessagebodyCreator(body));
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);


