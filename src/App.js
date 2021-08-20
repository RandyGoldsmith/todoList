import React from 'react';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <AddTodo />
                </div>
            </div>
        </div>       
    );
}

export default App;