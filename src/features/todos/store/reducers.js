import * as Actions from './actions'
export const todosReducer = (state = {
    data: [],
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case Actions.ADD_ITEM_SUCCESS: {
            return { ...state, data: [...state.data, action.todo] }
        }
        case Actions.ADD_ITEM_ERROR:{
            return {
                ...state,
                error: action.error
            }
        }
        case Actions.REMOVE_ITEM: {
            return { ...state, data: state.data.filter((e, i) => (i !== action.index)) }
        }
        case Actions.TOGGLE_ITEM: {
            return {
                ...state, data: state.data.map((e, i) => i === action.index ? { ...e, done: !e.done } : e)
            }
        }
        case Actions.REQUEST_TODO: {
            return {
                ...state,
                loading: true
            }
        }
        case Actions.FETCH_TODO_SUCCESS: {
            if (action.todos){
                return {
                    data: [...state.data, ...action.todos],
                    loading:false,
                    error:null
                }
            }else{
                return {
                    ...state,
                    loading:false,
                }
            }
            
        }
        case Actions.FETCH_TODO_ERROR: {
            return {
                ...state,
                loading:false,
                error: action.error
            }
        }
        default: { return state }
    }
}


// export const todosReducer = (state,action) => {
//     return {
//         todos: todoReducer(state.todos,action),
//         filter: filterReducer(state.filter,action)
//     }
// }
// export const todosReducers = combineReducers({ todos, filter })