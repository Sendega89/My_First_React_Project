import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form, Formik} from "formik";




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messageData.map(m => <Message message={m.message} key={m.id}/>);



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSendMessageClick={props.onSendMessageClick} />
            </div>
        </div>
    )
}

const AddMessageForm = (props)=>{

    return  <div>
        <Formik
            initialValues={{
                message: '',
            }}
            onSubmit={(values,{resetForm}) => {
              let messageText =  values.message
                props.onSendMessageClick(messageText);
                resetForm({values:''});
            }}>
            {({values, handleChange, handleSubmit}) => (
                <Form className={s.message_form}>
                    <div><Field type={"text"}
                                name={"message"}
                                placeholder={'Enter your message'}
                                onChange={handleChange}
                                value={values.login}/>
                    </div>
                    <div>
                        <button type={`submit`}
                                onClick={handleSubmit}
                        >Send
                        </button>
                    </div>

                </Form>
            )}
        </Formik>

    </div>
}
export default Dialogs;