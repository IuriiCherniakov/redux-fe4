import React, {useEffect, useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {addTodo, change_Todo, getTodos} from "./redux/action";

function Dashboard(props) {
    const {todos = [], column} = props;
    const [newTodo, setNewTodo] = useState('')

    const updateTodo = (todoId, newTitle) => {
        props.editTodo(todoId, newTitle)
    }
    const moveDown = (todoIndexCurrent, todoIndexPrevious) => {
        props.moveDownTodo(todoIndexCurrent, todoIndexPrevious);
    }

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

useEffect(()=>{
    props.getList()
},[]);

    console.log(todos)
    return (
        <div>
            <h3>TO DO LIST</h3>
            {todos.map((el, i) => <TodoListItem
                key={el._id}
                el={el}
                i={i}
                updateTodo={updateTodo}
                moveDown={moveDown}
                todos={todos}
            />)}


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
    addTodo: (newName) => dispatch(addTodo(newName)),
    editTodo: (todoId, newTitle) => dispatch(change_Todo(todoId, newTitle)),
    moveDownTodo: (todoIndexCurrent, todoIndexPrevious) => dispatch({
        type: 'MOVE_DOWN_TODO',
        payload: {todoIndexCurrent, todoIndexPrevious}
    }),
    getList: () => dispatch(getTodos())

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

