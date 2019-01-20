import React, { Component } from 'react';
import Todo from './todo';

export default class TodoList extends Component {

    state = {
        value: 'none'
    }

    onChange = (e) => {
        this.setState({ value: e.target.value })
        this.props.filterTodo(e.target.value);
    }

    render() {
        const { todos, removeTodo, setTodo, editTodo } = this.props;
        return (
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-6 col-6">
                    <h5 className="mt-2">Todo</h5>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                    <select onChange={this.onChange} value={this.state.value} className="custom-select">
                        <option value="none">None</option>
                        <option value='done'>Done</option>
                        <option value='notDone'>Not done</option>
                    </select>
                </div>
                
            </div>
            <div className="container">
                {todos.map((todo, i) =>
                    <Todo
                        key={i}
                        editTodo={editTodo}
                        setTodo={setTodo}
                        removeTodo={removeTodo}
                        {...todo}
                    />)}
            </div>
            </div>
        );
    }
}
