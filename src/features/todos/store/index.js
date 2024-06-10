import { injectReducers } from "../../../store";
import { todosReducer } from './reducers'
injectReducers('todos',todosReducer);