import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/actions';


class Todo extends React.Component  {

remove = () => this.props.dispatch(removeTodo(this.props.id));

render() {
    return (
        <tbody>
            <tr>
                <td>{this.props.todo}</td>
                <td><button onClick={this.remove}>Delete</button></td>
            </tr>
        </tbody>
    );
}
}

export default connect()(Todo);