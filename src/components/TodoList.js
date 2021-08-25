import React from 'react';
import './TodoList.css';

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li className="todo-row" key={todo.id}>
                        {todo.title}
                        <span>
                            <i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
                            <i className="fas fa-edit ms-2"></i>
                        </span>
                    </li>
                ))}
            </ul>
        </div>      
    );
};

export default TodoList;