import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export const Navbar: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={'/counter'}>Counter</Link>
        </li>
        <li>
          <Link to={'/users'}>Users</Link>
        </li>
        <li>
          <Link to={'/todo'}>ToDo</Link>
        </li>
      </ul>
    </header>
  );
};
