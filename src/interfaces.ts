export interface InterfaceStateCounter {
  count: number;
}

export interface InterfaceActionCounter {
  type: string;
  payload: number;
}

export interface InterfaceStateUsersInputValue {
  value: string;
}

export interface InterfaceActionUsersInputValue {
  type: string;
  payload: string;
}

export interface InterfaceUser {
  id: number;
  name: string;
}

export interface InterfaceStateUsers {
  users: InterfaceUser[];
}

export interface InterfaceActionUsers {
  type: string;
  payload: InterfaceUser;
}

export interface InterfaceStateTodoInputValue {
  value: string;
}

export interface InterfaceActionTodoInputValue {
  type: string;
  payload: string;
}

export interface InterfaceStateTodoTasks {
  tasks: InterfaceTask[];
}

export interface InterfaceTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  tasks: [];
}

export interface InterfaceActionTodo {
  type: string;
  payload: InterfaceTask;
}

export interface InterfaceCurrentTodoState {
  currentTasks: string;
}

export interface InterfaceActionCurrentTodo {
  type: string;
  payload: string;
}
