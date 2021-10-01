import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerCounter } from './reducerCounter';
import { reducerUsersInput } from './reducerUsersInput';
import { reducerUsers } from './reducerUsers';
import { reducerTodoInput } from './reducerTodoInput';
import { reducerTodoTasks } from './reducerTodoTasks';
import { reducerCurrentTasks } from './reducerCurrentTasks';

const rootReducer = combineReducers({
  counter: reducerCounter,
  valueInUsersInput: reducerUsersInput,
  users: reducerUsers,
  valueInTodoInput: reducerTodoInput,
  tasks: reducerTodoTasks,
  currentTasks: reducerCurrentTasks,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
