import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InterfaceUser } from '../../interfaces';
import { RootState } from '../../store';
import { createActionChangeValueUsersInput } from '../../store/reducerUsersInput';
import {
  createActionAddUser,
  createActionRemoveUser,
} from '../../store/reducerUsers';
import './users.css';

export const Users: React.FC = () => {
  const valueInInput = useSelector(
    (state: RootState) => state.valueInUsersInput.value
  );
  const users = useSelector((state: RootState) => state.users.users);

  const dispatch = useDispatch();

  const changeValueInInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(createActionChangeValueUsersInput(event.target.value));
  };

  const addUserHandle = (event: React.MouseEvent) => {
    event.preventDefault();
    if (valueInInput !== '') {
      dispatch(
        createActionAddUser({
          id: Date.now(),
          name: valueInInput,
        })
      );
      dispatch(createActionChangeValueUsersInput(''));
    }
  };

  const removeUserHandle = (user: InterfaceUser) => {
    if (confirm('Вы уверены?')) dispatch(createActionRemoveUser(user));
  };

  return (
    <div className='users'>
      <form>
        <label htmlFor='input'>Введите имя пользователя</label>
        <input
          type='text'
          id='input'
          onChange={changeValueInInput}
          value={valueInInput}
          autoFocus
        />
        <button type='submit' onClick={addUserHandle}>
          Добавить пользователя
        </button>
      </form>
      <div>
        {users.length === 0 ? (
          <span>Пользователи не найдены</span>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}{' '}
                <span onClick={() => removeUserHandle(user)}>X</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
