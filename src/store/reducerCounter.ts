import { InterfaceActionCounter, InterfaceStateCounter } from '../interfaces';

const localState: InterfaceStateCounter = {
  count: 0,
};

const ADD_COUNT = 'ADD_COUNT';
const SUBSTRACT_COUNT = 'SUBSTRACT_COUNT';

export const reducerCounter = (
  state = localState,
  action: InterfaceActionCounter
) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + action.payload };
    case SUBSTRACT_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const createActionAddCounter = (number: number) => {
  return {
    type: ADD_COUNT,
    payload: number,
  };
};

export const createActionSubstructCounter = (number: number) => {
  return {
    type: SUBSTRACT_COUNT,
    payload: number,
  };
};
