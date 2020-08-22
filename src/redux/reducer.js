const initialState = {
    todos: [
        {
            title: 'First todo',
            done: false,
            id: Math.random(),

        }, {
            title: 'Second todo',
            done: false,
            id: Math.random()
        }, {
            title: '3 todo',
            done: false,
            id: Math.random()
        }, {
            title: '4 todo',
            done: false,
            id: Math.random()

        }
    ],


};

const todo = (state = initialState, action) => {
        switch (action.type) {

            case 'TODO_ADD':
                return {
                    ...state,
                    todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]
                };

            case 'DELETE_TODO':
                const newTodos = state.todos.filter(el => el.id !== action.payload)

                return {
                    ...state,
                    todos: newTodos
                };

            case 'MARK_TODO':

                return {
                    ...state,
                    todos: state.todos.map(el => {
                        if (el.id === action.payload)
                            return ({...el, done: !el.done})
                        return el
                    })

                };
            case 'EDIT_TODO':

                return {
                    ...state,
                    todos: state.todos.map(el => {
                        if (el.id === action.payload.todoId) return ({...el, title: action.payload.newTitle})
                        return el
                    })
                };


            case 'MOVE_UP_TODO':
                let currentTodoId = action.payload.todoIndexCurrent;
                let previousTodoId = action.payload.todoIndexPrevious;
                const newListTodos = state.todos.map((el, i) => {

                    if (i === currentTodoId) return state.todos[previousTodoId]
                    if (i === previousTodoId) return state.todos[currentTodoId]

                    return el
                })

                return {
                    ...state,
                    todos: newListTodos
                };



            // setList(newList)

            // // case 'EDIT_TODO':
            // //     const editedTodos = state.todos.map((el => {
            // //         if (el.id === action.payload) return({...el, title:534535})
            // //         return state.todos
            // //     }))
            //
            //
            //     return {
            //         ...state,
            //         todos: editedTodos
            //     };

            default:
                return state;
        }
    }
;

export default todo;
