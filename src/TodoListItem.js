import React, {useState} from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import {connect} from "react-redux";

function TodoListItem(props) {

    const [editedTodo, setEditedTodo] = useState('')
    const {el, i, updateTodo, moveDown, todos} = props;

    const moveUpButton = () => {
        props.moveUpTodo(i, i - 1);
        console.log(el.i - 1);
    }


    return (
        <li>
            {el.name}

            <input type='checkbox' checked={el.done} onClick={() => {
                props.markTodo(el._id)
            }}/>


            <button onClick={() => props.deleteTodo(el.id)}>delete</button>

            <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/>
            <button onClick={() => {
                updateTodo(el.id, editedTodo);
                setEditedTodo('')
            }
            }>update
            </button>

            <button onClick={moveUpButton} disabled={i===0} >UP</button>
            <button onClick={() => moveDown(i, i + 1)} disabled={i===(todos.length-1)}>DOWN</button>
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


});

export default connect(null, mapDispatchToProps)(TodoListItem);




