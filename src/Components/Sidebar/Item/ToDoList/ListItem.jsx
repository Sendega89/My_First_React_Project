import React  from "react";
import s from "./ToDoList.module.scss"
import NewCommentForm from "./NewCommentForm";


function ListItem(props) {

    return (
        props.comments.map(n => (
            <ul key={n.id} className={s.changeOddEl}>
                <h3 className={n.priority && s.important} >{n.name}</h3>
                {n.priority && <div className={s.important}>important</div>}
                 <Reply item={n.reply}
                        deleteComment={props.deleteComment}
                        taskId={n.id}/>
                <NewCommentForm addComment={props.addCommentAC} id={n.id}/>
                   <div><button id={n.id} onClick={()=>props.deleteTask(n.id)}>X</button>
                   {props.comments.findIndex(i=> i.id===n.id)===0 ? '':
                       <button id={n.id} onClick={()=>props.upTask(n.id)} >UP</button>}
                   {props.comments.findIndex(i=> i.id===n.id) === props.comments.length-1 ? '':
                       <button id={n.id} onClick={()=>props.downTask(n.id)}>Down</button>}</div>
            </ul>
        )))
}
const Reply =({item,deleteComment,taskId}) => {
return (
      item.map((n) => {
          let commentId = Math.floor(Math.random()*10000000)
          return (
        <li key={commentId} className={s.comments_Task}>
            {n ? n : null}
            <span className={s.del_button} onClick={()=>deleteComment(taskId,n)}>x</span>
        </li>
    )}))
}

export default ListItem