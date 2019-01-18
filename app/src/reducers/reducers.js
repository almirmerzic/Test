import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO } from '../actions/actions';

const initialState = {
    todos: []
}

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todos => todos.id !== action.id)
            }
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;