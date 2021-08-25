import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


const App = () => {

    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        setTodoList((prevTodoList) => {
            return [...prevTodoList, {title: todo, id: Math.random()}];
        });
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodoList) => {
            return [...prevTodoList].filter(todo => todo.id !== id);
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <AddTodo onAddTodo={addTodo} />
                    <TodoList todos={todoList} deleteTodo={deleteTodo}/>
                </div>
            </div>
        </div>       
    );
}

export default App;