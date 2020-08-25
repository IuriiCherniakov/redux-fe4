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

export function deleteTodo(newName) {
    return (dispatch) => {
        axios.delete('http://localhost:5000/todo', {id: todoId})
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'DEL_TODO',
                    payload: result.data


                })
            })
            .catch()
    }

}


