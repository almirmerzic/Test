import React from 'react';
import Navbar from '../Navbar/Navbar';
import AddTodo from '../AddTodo/AddTodo';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="container mt-5">
                    <AddTodo />
                </div>
                <div>
                <Link to="/todolist">Show all Todos</Link>
                </div>
            </div>
        );
    }
}

export default Home;