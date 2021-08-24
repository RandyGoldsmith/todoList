import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        <div>
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <li className="todo-row">
                        {todo.title}
                        <span className=""></span>
                    </li>
                ))}
            </ul>
        </div>      
    );
};

export default TodoList;