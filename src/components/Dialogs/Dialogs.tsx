import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {AppPropsType} from "../../index";



export const Dialogs = (props: AppPropsType) => {

    let dialogsElements = props.dialogs?.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages?.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

