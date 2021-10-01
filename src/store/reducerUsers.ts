import {
  InterfaceStateUsers,
  InterfaceActionUsers,
  InterfaceUser,
} from '../interfaces';

const localState: InterfaceStateUsers = {
  users: [],
};

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

export const reducerUsers = (
  state = localState,
  action: InterfaceActionUsers
) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const createActionAddUser = (user: InterfaceUser) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const createActionRemoveUser = (user: InterfaceUser) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};
