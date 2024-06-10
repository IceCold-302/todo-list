import { createSelector } from "reselect";
export const todosSelector = store => store.todos;
export const filterSelector = (store, filter) => filter;

export const todoDataSelector = createSelector(
    [todosSelector],
    (todos) => todos ? todos.data : null
    )
export const filDataSelector = createSelector(
    [todoDataSelector, filterSelector],
    (todos, filter) => {
        if (todos && filter) {
            switch (filter) {
                case 'done': {
                    return todos.filter(e => e.done)
                }
                case 'active': {
                    return todos.filter(e => !e.done)
                }
                default: {
                    return todos
                }
            }
        }
    }
)