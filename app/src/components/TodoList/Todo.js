import React from 'react';

const Todo = ({ id, todo, removeTodo, setTodo, isDone, editTodo }) => (
    <div className="row mt-2">
        <div className="col-lg-6 col-sm-4 col-4">{todo}</div>
        <div className="col-lg-4 col-sm-6 col-8 row">
            <button className="btn btn-outline-danger" onClick={() => removeTodo(id)}><i className="fas fa-trash-alt"></i>Delete</button>
            <button className="ml-2 btn btn-outline-success" onClick={() => setTodo(id, todo, isDone)}><i className="fas fa-pencil-alt"></i> Edit</button></div>
        <div><input  className="form-check-input" type="checkbox" checked={isDone} onChange={() => editTodo({ id, todo, isDone: !isDone })} /></div>
    </div>
);

export default Todo;