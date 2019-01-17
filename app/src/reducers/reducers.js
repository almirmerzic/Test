import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/actions';

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

        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})
export default todoApp;