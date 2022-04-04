const ADD_TASK = 'ADD_TASK';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_TASK = 'DELETE_TASK';
const UP_TASK = 'UP_TASK';
const DOWN_TASK = 'DOWN_TASK';

let initialState = {
    comments: []
}
const toDoList_Reducer = (state = initialState, action) => {

    let newTask = {
        id: state.comments.length,
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
            return {
                ...state,
            };
        case DELETE_TASK:

            return {
                ...state,
                comments: [...state.comments.filter((item)=>item.id !== action.id)]
            };
        case UP_TASK:
            console.log(state.comments.findIndex(i=> i.id===action.id))
            let indexUP = state.comments.findIndex(i=> i.id===action.id);
            let delUpEl = [...state.comments.splice(indexUP,1)];
            state.comments.splice(indexUP-1,0, ...delUpEl)

            return {
                ...state,
                comments:[...state.comments]

            };
        case DOWN_TASK:

            let indexDOWN = state.comments.findIndex(i=> i.id===action.id);
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
export const addComment = (values) => ({type: ADD_COMMENT, comment: values.commentText})
export const deleteTask = (id) => ({type: DELETE_TASK, id})
export const upTask =(id) => ({type: UP_TASK,id})
export const downTask =(id) => ({type: DOWN_TASK,id})

export default toDoList_Reducer;