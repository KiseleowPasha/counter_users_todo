import {
  InterfaceStateTodoTasks,
  InterfaceActionTodo,
  InterfaceTask,
} from '../interfaces';

const localState: InterfaceStateTodoTasks = {
  tasks: [],
};

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_ALL_COMPLETE_TASKS = 'DELETE_ALL_COMPLETE_TASKS';
const LOAD_MANY_TASKS = 'LOAD_MANY_TASKS';

export const reducerTodoTasks = (
  state = localState,
  action: InterfaceActionTodo
) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload.id)],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case DELETE_ALL_COMPLETE_TASKS:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.completed !== true)],
      };
    case LOAD_MANY_TASKS:
      return { ...state, tasks: [...state.tasks, ...action.payload.tasks] };
    default:
      return state;
  }
};

export const createActionAddTask = (task: InterfaceTask) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const createActionDeleteTasks = (task: InterfaceTask) => {
  return {
    type: DELETE_TASK,
    payload: task,
  };
};

export const createActionCompleteTask = (task: InterfaceTask) => {
  return {
    type: COMPLETE_TASK,
    payload: task,
  };
};

export const createActionDeleteAllCompleteTasks = () => {
  return {
    type: DELETE_ALL_COMPLETE_TASKS,
  };
};

export const createActionLoadManyTasks = (tasks: []) => {
  return {
    type: LOAD_MANY_TASKS,
    payload: { tasks: tasks },
  };
};
