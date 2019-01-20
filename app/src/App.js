import React from 'react';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { addTodo, editTodo, removeTodo, setTodo, filterTodo } from './actions';

const App = ({ todoReducer, addTodo, removeTodo, editTodo, setTodo, filterTodo }) => (
    <div>
        <Navbar />
        <AddTodo
            addTodo={addTodo}
            {...todoReducer}
            editTodo={editTodo}
        />
        <TodoList
            todos={todoReducer.isFilter ? todoReducer.filterTodos : todoReducer.todos}
            removeTodo={removeTodo}
            setTodo={setTodo}
            editTodo={editTodo}
            filterTodo={filterTodo}
        />
    </div>
);

const mapStateToProps = (state) => ({
    todoReducer: state.todos
})

const mapDispatchToAction = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    addTodo: (todo) => dispatch(addTodo(todo)),
    editTodo: (item) => dispatch(editTodo(item)),
    setTodo: (id, todo, isDone) => dispatch(setTodo(id, todo, isDone)),
    filterTodo: (value) => dispatch(filterTodo(value))
})

export default connect(mapStateToProps, mapDispatchToAction)(App);