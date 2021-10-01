import {
  InterfaceStateTodoInputValue,
  InterfaceActionTodoInputValue,
} from '../interfaces';

const localState: InterfaceStateTodoInputValue = {
  value: '',
};

const CHANGE_INPUT_TODO_VALUE = 'CHANGE_INPUT_TODO_VALUE';

export const reducerTodoInput = (
  state = localState,
  action: InterfaceActionTodoInputValue
) => {
  switch (action.type) {
    case CHANGE_INPUT_TODO_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const createActionChangeValueTodoInput = (value: string) => {
  return {
    type: CHANGE_INPUT_TODO_VALUE,
    payload: value,
  };
};
