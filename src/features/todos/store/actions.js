import apiFirebase from '../../../config/apiFirebase';
export const TRY_ADD_ITEM = 'add item';
export const ADD_ITEM_SUCCESS = 'add item success';
export const ADD_ITEM_ERROR = 'add item error';

export const REMOVE_ITEM = 'remove item';
export const TOGGLE_ITEM = 'toggle item';

export const REQUEST_TODO = 'request todo'
export const FETCH_TODO = 'fetch todo'
export const FETCH_TODO_ERROR = 'fetch todo error'
export const FETCH_TODO_SUCCESS = 'fetch todo success '

export const addItemSuccess = (todo) => {
    return {
        type: ADD_ITEM_SUCCESS,
        todo
    }
}
export const addItemError = (error) => {
    return {
        type: ADD_ITEM_ERROR,
        error
    }
}
export const tryAddTodo = (todo) => {
    return (dispatch, getState) => {
        const todos = [...getState().todos.data, todo];
        return apiFirebase.put('todos.json', todos).then(
            response => dispatch(addItemSuccess(todo)),
            error => dispatch(addItemError(error))
        )
    }
}
export const removeItem = (index) => {
    return {
        type: REMOVE_ITEM,
        index
    }
}
export const toggleItem = (index) => {
    return {
        type: TOGGLE_ITEM,
        index
    }
}
export const requestTodo = () => {
    return {
        type: REQUEST_TODO,
    }
}
export const fetchTodoSuccess = (todos) => {
    return {
        type: FETCH_TODO_SUCCESS,
        todos
    }
}
export const fetchTodoError = (error) => {
    return {
        type: FETCH_TODO_ERROR,
        error
    }
}
export const fetchTodo = () => {
    return (dispatch) => {
        dispatch(requestTodo());
        return apiFirebase.get('todos.json').then(
            (response) => { dispatch(fetchTodoSuccess(response.data)) },
            (error) => { dispatch(fetchTodoError(error)) }
        )
    }
}