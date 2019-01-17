export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let todoId = 0;

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todos: { ...todo, id: todoId++ }
    };
}