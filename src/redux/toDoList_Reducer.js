const ADD_TASK = 'ADD_TASK';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_TASK = 'DELETE_TASK';
const UP_TASK = 'UP_TASK';
const DOWN_TASK = 'DOWN_TASK';
const DELETE_COMMENT = 'DELETE_COMMENT';

let initialState = {
    comments: []
}
const toDoList_Reducer = (state = initialState, action) => {

const getIndexElement = (id) => {
 return  state.comments.findIndex(i=> i.id===id)
}
    let newTask = {
        id: state.comments.length+action.name,
        name: action.name,
        priority:action.priority,
        reply: [],
    };
    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                comments: [...state.comments, newTask],
            };

        case ADD_COMMENT:
            let indexTask = getIndexElement(action.id);
              state.comments[indexTask].reply.push(action.comment)
            return {
                ...state,
                comments: [...state.comments]

            };
        case DELETE_COMMENT:
            let indexComment = getIndexElement(action.taskId);
            let indexSubComment = state.comments[indexComment].reply.findIndex(i=> i===action.commentId)
            state.comments[indexComment].reply.splice(indexSubComment,1);
            return {
                ...state,
                comments: [...state.comments]
            }
        case DELETE_TASK:
            return {
                ...state,
                comments: [...state.comments.filter((item)=>item.id !== action.id)]
            };
        case UP_TASK:
            let indexUP = getIndexElement(action.id)
            let delUpEl = [...state.comments.splice(indexUP,1)];
            state.comments.splice(indexUP-1,0, ...delUpEl)

            return {
                ...state,
                comments:[...state.comments]

            };
        case DOWN_TASK:
            let indexDOWN =getIndexElement(action.id)
            let delDownEl = [...state.comments.splice(indexDOWN,1)];
            state.comments.splice(indexDOWN+1,0, ...delDownEl)
            return {
                ...state,
                comments:[...state.comments],
            }
        default :
            return state;
    }
}
export const addTask = (values) => ({type: ADD_TASK, name: values.taskText, priority: values.required})
export const addComment = (values,id) => ({type: ADD_COMMENT, comment: values.commentText,id})
export const deleteTask = (id) => ({type: DELETE_TASK, id})
export const upTask =(id) => ({type: UP_TASK,id})
export const downTask =(id) => ({type: DOWN_TASK,id})
export const deleteComment =(taskId,commentId) => ({type: DELETE_COMMENT,taskId,commentId})

export default toDoList_Reducer;