import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

import { useAppSelector } from 'shared/hooks/redux-hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { menuItems } from './model/types';

export const Header: React.FC = () => {
  const auth = useAppSelector(selectAuth);

  return auth ? (
    <div className={s.body}>
      {menuItems.map((el) => {
        return (
          <NavLink
            key={el.path}
            to={el.path}
            className={({ isActive }) => (isActive ? undefined : s.inActive)}>
            {<el.icon className={s.icon} />}
          </NavLink>
        );
      })}
    </div>
  ) : (
    <div className={s.body}>
      {menuItems.map((el) => {
        return <el.icon className={s.icon} key={el.path} />; // <img className={s.icon} key={el.path}></img>;
      })}
    </div>
  );
};
