import React from "react";
import s from "./ToDoList.module.scss"
import NewCommentForm from "./NewCommentForm";



const ListItem = (props) => {

    let taskElements = props.itemsTaskData.map(t => <div key={t.id}>{t.task}</div>);
    let priority = props.itemsTaskData.map(p => <div key={p.id}>{p.priority ? <div>+</div> : <div>-</div>}</div>);
    let comment = props.itemsTaskData.map(c => c.comment.map(ct => <div key={ct.id}>{ct.commentText}</div>))
    return <div className={s.toDoListItems}>
        <div className={s.toDoListItems_item}>
            {taskElements}
        </div>
        <div className={s.toDoListItems_item}>
            {priority}
        </div>
        <div className={s.toDoListItems_item}>

            {comment}<NewCommentForm addCommentAC={props.addCommentAC} />
        </div>
    </div>

}
export default ListItem