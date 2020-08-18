import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";

function Dashboard(props) {

    const [newTodo, setNewTodo] = useState('')
    const [editedTodo, setEditedTodo] = useState('')


    const addButtonHandler = () => {
        props.addTodo(newTodo)
        setNewTodo('')
    }

    // const editButton = () => {
    //     props.editTodo(el.id)
    // }


    // const editButton = () => {
    //     props.editTodo(editedTodo)
    // }

    // console.log(props)
    const {todos = [], column} = props;

    return (
        <div>
            {todos.map(el => <li>
                {el.title}
                <input type='checkbox' checked={el.done} onClick={()=>{props.markTodo(el.id)}}/>


                <button onClick={() => props.deleteTodo(el.id)}>delete</button>

                <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/>
                <button onClick={()=>props.editTodo(el.id, editedTodo)}>update</button>
            </li>)}


            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text"/>
            <button onClick={addButtonHandler}>add new todo</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    column: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    markTodo: (todoId) => dispatch({type: 'MARK_TODO', payload: todoId}),
    editTodo: (todo) => dispatch({type: 'EDIT_TODO', payload: todo}),

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

