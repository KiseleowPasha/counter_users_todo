import { createActionLoadManyTasks } from './reducerTodoTasks';

const urlTodo = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTodo = () => {
  return function (dispatch: any) {
    fetch(urlTodo)
      .then((response) => response.json())
      .then((todos) => dispatch(createActionLoadManyTasks(todos)));
  };
};
