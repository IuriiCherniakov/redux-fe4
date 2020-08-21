import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";

function Dashboard(props) {
    const {todos = [], column} = props;
    const [newTodo, setNewTodo] = useState('')
    const [editedTodo, setEditedTodo] = useState('')


    const addButtonHandler = () => {
        props.addTodo(newTodo)
        setNewTodo('')
    }


    // const moveUp = (currentElement, previousElement) => {
    //     if(previousElement < 0 || previousElement >= list.length) return
    //     const newList = list.map((el, i)=> {
    //         if(currentElement === i) return list[previousElement];
    //         if(previousElement === i) return list[currentElement];
    //         return el;
    //     })
    //     setList(newList)



console.log(todos)
return (
    <div>
        <h3>TO DO LIST</h3>
        {todos.map((el, i) => <li>
            {el.title}

            <input type='checkbox' checked={el.done} onClick={() => {
                props.markTodo(el.id)
            }}/>


            <button onClick={() => props.deleteTodo(el.id)}>delete</button>

            <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/>
            <button onClick={() => {
                props.editTodo(el.id, editedTodo);
                setEditedTodo('')
            }
            }>update</button>

            <button onClick={()=> {
                props.moveUpTodo(el.id, el.i,  el.i-1)
                console.log(el.i)

            }
            }>UP</button>
            <button>DOWN</button>
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
            editTodo: (todoId, newTitle) => dispatch({type: 'EDIT_TODO', payload:{todoId, newTitle}}),
            moveUpTodo: (todoId, todoIdCurrent, todoIdPrevious) => dispatch({type: 'MOVE_UP_TODO', payload:{todoId, todoIdCurrent, todoIdPrevious} }),

            });

            export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

