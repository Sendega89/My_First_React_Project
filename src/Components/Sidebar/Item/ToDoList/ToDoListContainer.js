import {connect} from "react-redux";
import {compose} from "redux";
import ToDoList from "./ToDoList";
import {addComment, addTask, deleteComment, deleteTask, downTask, upTask} from "../../../../redux/toDoList_Reducer";

const ToDoListContainer = (props)=> {

    return <div>
        <ToDoList comments={props.comments}
                  addTask={props.addTask}
                  addComment={props.addComment}
                  deleteTask={props.deleteTask}
                  upTask={props.upTask}
                  downTask={props.downTask}
                  deleteComment={props.deleteComment}/>
    </div>
}
let mapStateToProps = (state) => {
    return {
        comments: state.toDoList.comments
    }
}

export default compose(
    connect(mapStateToProps,{addTask,addComment,deleteTask,downTask,upTask,deleteComment}),
)(ToDoListContainer);