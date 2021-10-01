import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Counter } from './counter/counter';
import { Navbar } from './navbar/navbar';
import { ToDo } from './todo/todo';
import { Users } from './users/users';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/todo'>
          <ToDo />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/counter'>
          <Counter />
        </Route>
      </Switch>
    </>
  );
};
