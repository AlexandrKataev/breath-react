import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

import { useAppSelector } from 'app/store/hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { menuItems } from './model/types';

export const Header: FC = () => {
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
