import React, {useState} from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import {connect} from "react-redux";
import {delete_Todo, mark_Todo} from "./redux/action";

function TodoListItem(props) {

    const [editedTodo, setEditedTodo] = useState('')
    const {el, i, updateTodo, moveDown, todos} = props;

    const moveUpButton = () => {
        props.moveUpTodo(i, i - 1);
        console.log(el.i - 1);
    }


    return (
        <ul>
            <span className='w-25 p-3'>{el.name}</span>


            <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value) }/>
            <button onClick={() => {
                updateTodo(el._id, editedTodo);
                setEditedTodo('')
            }
            }>update
            </button>
            <button onClick={() => props.delTodo(el._id)}>delete</button>
            <button onClick={moveUpButton} disabled={i===0} >UP</button>
            <button onClick={() => moveDown(i, i + 1)} disabled={i===(todos.length-1)}>DOWN</button>
            <input type='checkbox' checked={el.done} onClick={() => {
            props.markTodo(el._id, el.done)
        }}/>
        </ul>
    );
}


const mapDispatchToProps = (dispatch) => ({
    delTodo: (todoId) => dispatch(delete_Todo(todoId)),
    markTodo: (todoId, done) => dispatch(mark_Todo(todoId, done)),

    moveUpTodo: (todoIndexCurrent, todoIndexPrevious) => dispatch({
        type: 'MOVE_UP_TODO',
        payload: {todoIndexCurrent, todoIndexPrevious}
    }),


});

export default connect(null, mapDispatchToProps)(TodoListItem);




