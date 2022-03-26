const ADD_TASK = 'ADD_TASK';
const ADD_COMMENT = 'ADD_COMMENT';


let initialState = {

    itemsTaskData: [
        {
            id: '',
            task: 'Task',
            priority:true,
            comment:[
                {id: 1,commentText:'this is comment'},
            ],
        },

    ],
}

const toDoList_Reducer = (state = initialState, action) => {

    let newTask = {id:state.itemsTaskData.length+1 ,
        task: action.task,
        priority:action.priority,
        comment:[
            {id:state.itemsTaskData.length+1,commentText:'this is NEW comment'},
        ],

    };
    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                itemsTaskData:[...state.itemsTaskData, newTask]
            };

        default :
            return state;
    }
}
export const addTask = (values) => ({type: ADD_TASK, task:values.taskText,priority:values.required})

export default toDoList_Reducer;