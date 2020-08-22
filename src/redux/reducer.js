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
            title: 'Third todo',
            done: false,
            id: Math.random()
        }, {
            title: 'Fourth todo',
            done: false,
            id: Math.random()

        },
        {
            title: 'Fifth todo',
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
                let currentTodoIndex = action.payload.todoIndexCurrent;
                let previousTodoIndex = action.payload.todoIndexPrevious;
                const newListTodos = state.todos.map((el, i) => {

                    if (i === currentTodoIndex) return state.todos[previousTodoIndex]
                    if (i === previousTodoIndex) return state.todos[currentTodoIndex]

                    return el
                })

                return {
                    ...state,
                    todos: newListTodos
                };

            case 'MOVE_DOWN_TODO':
                let currTodoIndex = action.payload.todoIndexCurrent;
                let prevTodoIndex = action.payload.todoIndexPrevious;
                const newListTodos1 = state.todos.map((el, i) => {

                    if (i === currTodoIndex) return state.todos[prevTodoIndex]
                    if (i === prevTodoIndex) return state.todos[currTodoIndex]

                    return el
                })

                return {
                    ...state,
                    todos: newListTodos1
                };




            default:
                return state;
        }
    }
;

export default todo;
