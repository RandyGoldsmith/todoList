import React, {useState} from 'react';

const AddTodo = (props) => {
    const [enteredTodo, setTodo] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(enteredTodo.trim().length === 0) {
            return;
        }
        props.onAddTodo(enteredTodo);
        setTodo('');
    };

    const toDoChangeHandler = (e) => {
        setTodo(e.target.value);
    }

    return (
            <form onSubmit={addTodoHandler}>
                <div className="input-group mt-4">
                    <label htmlFor="coursename" className="form-label"></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="coursename" 
                        placeholder="Add a todo"
                        value={enteredTodo}
                        onChange={toDoChangeHandler}    
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        
                    >Submit</button>
                </div>
            </form>                        
    );
};

export default AddTodo;