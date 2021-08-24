import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <li>
                    {todo.title}
                </li>
            ))}
        </ul>      
    );
};

export default TodoList;