import React from 'react';

const AddTodo = () => {
    const addCourseHandler = (e) => {
        e.preventDefault();
    };

    return (
            <form onSubmit={addCourseHandler}>
                <div className="input-group mt-4">
                    <label for="coursename" className="form-label"></label>
                    <input type="text" className="form-control" id="coursename" placeholder="Add a todo"/>
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </form>                        
    );
};

export default AddTodo;