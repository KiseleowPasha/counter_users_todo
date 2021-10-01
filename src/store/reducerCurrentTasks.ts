import {
  InterfaceCurrentTodoState,
  InterfaceActionCurrentTodo,
} from '../interfaces';

const localState: InterfaceCurrentTodoState = {
  currentTasks: 'all',
};

const CHANGE_CURRENT_TASKS = 'CHANGE_CURRENT_TASKS';

export const reducerCurrentTasks = (
  state = localState,
  action: InterfaceActionCurrentTodo
) => {
  switch (action.type) {
    case CHANGE_CURRENT_TASKS:
      return { ...state, currentTasks: action.payload };
    default:
      return state;
  }
};

export const createActionChangeCurrentTasks = (currentTasks: string) => {
  return {
    type: CHANGE_CURRENT_TASKS,
    payload: currentTasks,
  };
};
