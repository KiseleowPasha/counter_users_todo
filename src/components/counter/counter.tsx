import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  createActionAddCounter,
  createActionSubstructCounter,
} from '../../store/reducerCounter';
import './counter.css';

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  console.log(window.sessionStorage.count, count);

  const addCountHandle = () => {
    let number = Number(prompt('Введите число'));
    number = number ? number : 0;
    dispatch(createActionAddCounter(number));
  };

  const substructCountHandle = () => {
    let number = Number(prompt('Введите число'));
    number = number ? number : 0;
    dispatch(createActionSubstructCounter(number));
  };

  return (
    <div className='counter'>
      <button onClick={addCountHandle}>Добавить</button>
      <button onClick={substructCountHandle}>Убавить</button>
      <span>{count}</span>
    </div>
  );
};
