import React from 'react';

const EditTodo = ({currentTodo, setIsEditing, onEditTodoFormSubmit}) => {
    

    return (
        <form onSubmit={onEditTodoFormSubmit}>
            <div className="input-group mt-4">
                <label htmlFor="updateTodo" className="form-label"></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="coursename" 
                           
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        
                    >Update</button>
            </div>
        </form>                 
    );
};

export default EditTodo;