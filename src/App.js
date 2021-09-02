import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


const App = () => {

    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

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

    /* const onEditInputChange = (e) => {
        setCurrentTodo({...currentTodo, title: e.target.value});
        console.log(currentTodo);
    }
    */
    const handleEditClick = () => {
        setIsEditing(true);
    };
    
    /* const handleEditTodo = (updatedTitle, id) => {
        const updatedTodo = todoList.map((todo) => {
            return todo.id === id ? updatedTitle : todo;
        });
        setIsEditing(false);
        setTodoList(updatedTodo);
    };

    const onEditFormSubmit = (e) => {
        e.preventDefault();
        handleEditTodo(currentTodo, currentTodo.id);
    } */

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <AddTodo onAddTodo={addTodo} />
                    <TodoList 
                        todos={todoList} 
                        deleteTodo={deleteTodo}
                        editTodo={handleEditClick}
                        isEditing={isEditing}   
                    />
                </div>
            </div>
        </div>       
        
        
    );
}

export default App;