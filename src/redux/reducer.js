const initialState = {
    todos: [
        {
            title: 'First todo',
            done: false,
            id: Math.random()
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

    // columns: [{id: 1, name: 'qwe'}]
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
