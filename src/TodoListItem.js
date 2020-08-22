import React, {useState} from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import {connect} from "react-redux";

function TodoListItem(props) {

    const [editedTodo, setEditedTodo] = useState('')
    const {el, i, updateTodo} = props;


    return (
        <li>
            {el.title}

            <input type='checkbox' checked={el.done} onClick={() => {
                props.markTodo(el.id)
            }}/>


            <button onClick={() => props.deleteTodo(el.id)}>delete</button>

            <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/>
            <button onClick={() => {
                updateTodo(el.id, editedTodo);
                setEditedTodo('')
            }
            }>update
            </button>

            <button onClick={() => {
                props.moveUpTodo(i, i - 1)
                console.log(el.i - 1)

            }
            }>UP
            </button>
            <button>DOWN</button>
        </li>
    );
}


const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    markTodo: (todoId) => dispatch({type: 'MARK_TODO', payload: todoId}),

    moveUpTodo: (todoIndexCurrent, todoIndexPrevious) => dispatch({
        type: 'MOVE_UP_TODO',
        payload: {todoIndexCurrent, todoIndexPrevious}
    }),
    // moveDownTodo: (todoIndexCurrent, todoIndexPrevious) => dispatch({type: 'MOVE_DOWN_TODO', payload:{todoIndexCurrent, todoIndexPrevious} }),

});

export default connect(null, mapDispatchToProps)(TodoListItem);




