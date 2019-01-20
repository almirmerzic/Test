import React from 'react';

class AddTodo extends React.Component {

    state = {
        id: this.props.id,
        todo: this.props.todo || '',
        isDone: this.props.isDone
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ id: nextProps.id, todo: nextProps.todo, isDone: nextProps.isDone });
    }

    getTodo = (e) => this.setState({ todo: e.target.value });

    sendTodo = () => {
        if (this.state.todo.length > 0)
            this.props.addTodo(this.state.todo);
        this.setState({ todo: '' })
    }

    editTodo = () =>
        this.props.editTodo(this.state)

    render() {
        return (
            <form className="container mt-5">

                <div className="row mb-2">
                    <div className="col-lg-10 col-sm-8">
                        <input type="text" placeholder="Enter Todo..." className="form-control" value={this.state.todo} onChange={this.getTodo} />
                    </div>
                    <div className="col-lg-2 col-sm-4">{this.state.id != null
                        ? <button type="button" onClick={this.editTodo} className="w-100 btn btn-success"><i className="fas fa-save"></i> Update</button>
                        : <button type="button" onClick={this.sendTodo} className="w-100 btn btn-primary"><i className="fas fa-plus-circle"></i> Add</button>
                    }</div>
                </div>
            </form>
        );
    }
}

export default AddTodo;