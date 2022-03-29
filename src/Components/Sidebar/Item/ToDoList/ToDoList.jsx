import React from "react";
import ListItem from "./ListItem";
import s from "./ToDoList.module.scss"
import NewTaskForm from "./NewTaskForm";



const ToDoList =(props) => {


    return <div className={s.toDoList_wrapper}>
        <div className={s.toDoList_title}><h1>My personal to do list</h1></div>
        <NewTaskForm addTask={props.addTask}/>
        <div className={s.toDoList_items}>
            <ListItem itemsTaskData={props.itemsTaskData} addCommentAC={props.addCommentAC}/>
        </div>


    </div>
}
export default ToDoList