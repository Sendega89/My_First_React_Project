import React  from "react";
import s from "./ToDoList.module.scss"
import NewCommentForm from "./NewCommentForm";



function ListItem(props) {

    return (
        props.comments.map(n => (
            <div key={n.id}>
                <h3>{n.name}</h3>
                {n.priority && <div className={s.important}>VIP</div>}
                {n.reply.map(el => <div key={n.id+1}>{el}</div>)}
                <NewCommentForm addCommentAC={props.addCommentAC} />
               <div>

                   <button id={n.id} onClick={()=>props.deleteTask(n.id)}>X</button>
                   {n.id ===0 ? '':
                       <button id={n.id} onClick={()=>props.upTask(n.id)} >UP</button>}
                   {n.id === props.comments.length-1 ? '':
                       <button id={n.id} onClick={()=>props.downTask(n.id)}>Down</button>}
            </div>
            </div>

        )))

}


export default ListItem

