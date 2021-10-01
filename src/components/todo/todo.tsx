import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InterfaceTask } from '../../interfaces';
import { RootState } from '../../store';
import { fetchTodo } from '../../store/async';
import { createActionChangeCurrentTasks } from '../../store/reducerCurrentTasks';
import { createActionChangeValueTodoInput } from '../../store/reducerTodoInput';
import {
  createActionAddTask,
  createActionCompleteTask,
  createActionDeleteAllCompleteTasks,
  createActionDeleteTasks,
} from '../../store/reducerTodoTasks';
import './todo.css';

export const ToDo: React.FC = () => {
  const value = useSelector((state: RootState) => state.valueInTodoInput.value);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const currentTasks = useSelector(
    (state: RootState) => state.currentTasks.currentTasks
  );
  const dispatch = useDispatch();

  const onChangeValueInputHandle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(createActionChangeValueTodoInput(event.target.value));
  };

  const addTaskHandle = (event: React.MouseEvent) => {
    event.preventDefault();
    if (value !== '') {
      dispatch(
        createActionAddTask({
          userId: Date.now(),
          id: Date.now(),
          title: value,
          completed: false,
          tasks: [],
        })
      );
      dispatch(createActionChangeValueTodoInput(''));
    }
  };

  const completeTaskHandle = (task: InterfaceTask) => {
    dispatch(createActionCompleteTask(task));
  };

  const deleteTaskHandle = (task: InterfaceTask) => {
    if (confirm('Вы уверены?')) dispatch(createActionDeleteTasks(task));
  };

  const changeCurrentTasksHandle = (value: string) => {
    dispatch(createActionChangeCurrentTasks(value));
  };

  const filterTasks = () => {
    if (currentTasks === 'all') return tasks;
    if (currentTasks === 'completed')
      return tasks.filter((task) => task.completed === true);
    if (currentTasks === 'active')
      return tasks.filter((task) => task.completed === false);

    return tasks;
  };

  const filteredTasks = filterTasks();
  const hasCompletedTask = tasks.filter((task) => task.completed === true);

  const deleteAllCompleteTasksHandle = () => {
    if (confirm('Вы уверены?')) dispatch(createActionDeleteAllCompleteTasks());
  };

  const loadManyTasksHandle = () => {
    dispatch(fetchTodo());
  };

  return (
    <div className='todo'>
      <form>
        <label htmlFor='todo-input'>Введите название задачи</label>
        <input
          type='text'
          id='todo-input'
          value={value}
          onChange={onChangeValueInputHandle}
          autoFocus
        />
        <button type='submit' onClick={addTaskHandle}>
          Ввести задачу
        </button>
      </form>
      <div>
        {tasks.length === 0 ? (
          <button onClick={loadManyTasksHandle}>
            Загрузить задачи по сети
          </button>
        ) : (
          <div>
            <ul>
              {filteredTasks.map((task) => (
                <li key={task.id}>
                  <div className={task.completed ? 'completed-task' : ''}>
                    <input
                      type='checkbox'
                      id={String(task.id)}
                      defaultChecked={task.completed}
                      onClick={() => completeTaskHandle(task)}
                    />
                    <label htmlFor={String(task.id)}>{task.title}</label>
                    <span onClick={() => deleteTaskHandle(task)}>X</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul id='nav-tasks'>
              <li onClick={() => changeCurrentTasksHandle('all')}>
                Все задачи
              </li>
              <li onClick={() => changeCurrentTasksHandle('active')}>
                Активные
              </li>
              <li onClick={() => changeCurrentTasksHandle('completed')}>
                Завершённые
              </li>
              {hasCompletedTask.length !== 0 ? (
                <li onClick={deleteAllCompleteTasksHandle}>
                  Удалить завершённые
                </li>
              ) : null}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
