import {connect} from "react-redux";
import {compose} from "redux";
import ToDoList from "./ToDoList";
import {addTask} from "../../../../redux/toDoList_Reducer";

const ToDoListContainer = (props)=> {

    return <div>
        <ToDoList itemsTaskData={props.itemsTaskData} addTask={props.addTask} />
    </div>
}
let mapStateToProps = (state) => {

    return {
        itemsTaskData: state.toDoList.itemsTaskData
    }
}

export default compose(
    connect(mapStateToProps,{addTask}),
)(ToDoListContainer);