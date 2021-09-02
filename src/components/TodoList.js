import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, deleteTodo, editTodo, isEditing}) => {
    return (
        <div>
            <ul className="todo-list">
                {todos.map((todo) => (
                        <TodoListItem 
                            key={todo.id}
                            todo={todo} 
                            deleteTodo={deleteTodo} 
                            editTodo={editTodo}
                            isEditing={isEditing}        
                        />
                ))}
            </ul>
        </div>      
    );
};

export default TodoList;