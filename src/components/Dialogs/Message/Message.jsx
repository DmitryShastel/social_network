import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={s.dialog}>
            <img src='https://iconarchive.com/download/i75883/martz90/circle/messages.ico'/>
            {props.message}
         {/*   <textarea className={s.t} ref={newMessageElement}></textarea>
            <button className={s.b} onClick={addMessage}>add</button>*/}

        </div>
    )
}

export default Message;