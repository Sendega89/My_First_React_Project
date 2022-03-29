import {connect} from "react-redux";
import {compose} from "redux";
import ToDoList from "./ToDoList";
import {addCommentAC, addTask} from "../../../../redux/toDoList_Reducer";

const ToDoListContainer = (props)=> {

    return <div>
        <ToDoList itemsTaskData={props.itemsTaskData}
                  addTask={props.addTask}
                  addCommentAC={props.addCommentAC} />
    </div>
}
let mapStateToProps = (state) => {

    return {
        itemsTaskData: state.toDoList.itemsTaskData
    }
}

export default compose(
    connect(mapStateToProps,{addTask, addCommentAC}),
)(ToDoListContainer);