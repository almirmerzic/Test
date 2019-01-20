import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    SET_TODO,
    FILTER_TODO
} from './constants';

let todoId = 0;

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todos: { todo, id: todoId++, isDone: false }
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}

export function setTodo(id, todo, isDone) {
    return {
        type: SET_TODO,
        id,
        todo,
        isDone
    };
}

export function editTodo(item) {
    return {
        type: EDIT_TODO,
        item
    };
}

export function filterTodo(value) {
    return {
        type: FILTER_TODO,
        value
    };
}
