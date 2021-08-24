import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        <div>
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <li className="todo-row">
                        {todo.title}
                        <span>
                            <i className="fas fa-trash-alt"></i>
                            <i className="fas fa-edit ms-2"></i>
                        </span>
                    </li>
                ))}
            </ul>
        </div>      
    );
};

export default TodoList;