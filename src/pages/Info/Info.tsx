import React from 'react';
import s from './Info.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { exitAuth } from 'processes/Auth/authSlice';
import { selectAuth } from 'processes/Auth/selectors';

import userIcon from 'assets/images/user.png';

const Info: React.FC = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(selectAuth).email;

  const logOutClick = () => {
    window.localStorage.removeItem('auth');
    dispatch(exitAuth());
  };

  return (
    <div className={s.body}>
      <h1>{'Дыхательная гимнастика по таблицам дыхания Алчевского'}</h1>
      <div className={s.user}>
        <img src={userIcon}></img>
        <div>{userEmail}</div>
      </div>

      <button className={s.button} onClick={logOutClick}>
        Выйти
      </button>
    </div>
  );
};

export default Info;
