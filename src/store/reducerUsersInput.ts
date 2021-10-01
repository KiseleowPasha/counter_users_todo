import {
  InterfaceStateUsersInputValue,
  InterfaceActionUsersInputValue,
} from '../interfaces';

const localState: InterfaceStateUsersInputValue = {
  value: '',
};

const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const reducerUsersInput = (
  state = localState,
  action: InterfaceActionUsersInputValue
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const createActionChangeValueUsersInput = (value: string) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};
