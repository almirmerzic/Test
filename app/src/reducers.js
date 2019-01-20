import { combineReducers } from 'redux';
import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    SET_TODO,
    FILTER_TODO
} from './constants';

const initialState = {
    todos: [],
    id: null,
    isDone: false,
    isFilter: false,
    todo: '',
    filterTodos: []
}

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, action.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                id: null,
                todo: '',
                isDone: false,
                todos: state.todos.filter(todo => todo.id !== action.id),
                filterTodos: state.filterTodos.filter(todo => todo.id !== action.id)
            }
        case SET_TODO:
            return {
                ...state,
                todo: action.todo,
                id: action.id,
                isDone: action.isDone
            }
        case EDIT_TODO:
            const { id, todo, isDone } = action.item;
            return {
                ...state,
                id: null,
                todo: '',
                isDone: false,
                todos: state.todos.map((t) => {
                    if(t.id === id)
                        return { ...t, todo, isDone };
                    return t;
                }),
                filterTodos: state.filterTodos.length > 0
                    ? state.filterTodos.map((t) => {
                        if(t.id === id)
                            return { ...t, todo, isDone };
                        return t;
                    })
                    : []
            }
        case FILTER_TODO:
        if (action.value === 'none')
            return {
                ...state,
                filterTodos: [],
                isFilter: false
            }
        else  
            return {
                ...state,
                isFilter: true,
                filterTodos: action.value === 'done'
                    ? state.todos.filter(t => t.isDone)
                    : state.todos.filter(t => !t.isDone)
            }
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;