import React from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Todo</th>
                            </tr>
                        </thead>
                        {this.props.todos.map((todos, i) =>
                            <Todo
                                key={i}
                                id={todos.id}
                                todo={todos.todo}

                            />)}
                    </table>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps)(TodoList);