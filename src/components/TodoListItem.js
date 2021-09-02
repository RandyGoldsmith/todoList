import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, deleteTodo, editTodo, isEditing}) => {

    const renderEditInput = () => {
            return <input type="text" />

        }

    const renderList = () => {
            return <li className="todo-row">
                        {todo.title}
                        <span>   
                            <i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
                            <i className="fas fa-edit ms-2" onClick={() => editTodo()}></i>
                        </span> 
                    </li>
        }


    return (
        <div>    
            {isEditing ? renderEditInput() : renderList()}
        </div>
    );
};

export default TodoListItem;