import React from 'react';
import Navbar from '../Navbar/Navbar';
import AddTodo from '../AddTodo/AddTodo';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <AddTodo />
                </div>

            </div>
        );
    }
}

export default Home;