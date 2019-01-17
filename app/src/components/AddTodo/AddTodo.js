import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../../actions/actions';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
        this.sendTodo = this.sendTodo.bind(this);
        this.getTodo = this.getTodo.bind(this);
    }

    getTodo = (e) => this.setState({ todo: e.target.value });

    sendTodo = () => {
      this.props.dispatch(addTodo(this.state.todo));
      this.setState({ todo: '' })
    }

    render() {
        return (
            <div>
                <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Todo</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={this.state.todo} onChange={this.getTodo} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="button" onClick={this.sendTodo} className="btn btn-primary">Add Todo</button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default connect()(AddTodo);