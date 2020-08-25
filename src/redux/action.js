import axios from 'axios'

export function deleteTodo(todoId) {
    // const newTodos = state.todos.filter(el => el.id !== action.payload)
    // dispatch({type: 'DELETE_TODO', payload: todoId})

}

export function getTodos() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo ')
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'GET_TODO',
                    payload: result.data
                })
            })
            .catch()
    }

}


export function addTodo(newName) {
    return (dispatch) => {
        axios.post('http://localhost:5000/todo', {name: newName})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch()
    }

}

export function delete_Todo(todoId) {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'DEL_TODO',
                    payload: todoId,},
                    dispatch(getTodos())
                    )
            })
            .catch()
    }

}


export function change_Todo(todoId, newTitle) {
    return (dispatch) => {
        axios.patch(`http://localhost:5000/todo/${todoId}`, {name: newTitle})
            .then(result => {
                console.log(result.data)
                dispatch({
                        type: 'EDIT_TODO',
                        payload: {todoId, newTitle},
                    },
                    dispatch(getTodos())
                )
            })
            .catch()
    }

}

export function mark_Todo(todoId, done) {
    return (dispatch) => {
        axios.patch(`http://localhost:5000/todo/${todoId}`, {done: !done})
            .then(result => {
                console.log(result.data)
                dispatch({
                        type: 'MARK_TODO',
                        payload: {todoId, done},
                    },
                    dispatch(getTodos())
                )
            })
            .catch()
    }

}



