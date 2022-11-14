import React from 'react';
import s from './Logout.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { exitAuth } from 'processes/Auth/authSlice';
import { selectAuth } from 'processes/Auth/selectors';

import userIcon from 'assets/images/user.png';
import Button from 'shared/ui/Button/Button';

const Logout = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(selectAuth).email;

  const logOutClick = () => {
    window.localStorage.removeItem('auth');
    dispatch(exitAuth());
  };
  return (
    <div className={s.body}>
      <div className={s.user}>
        <img src={userIcon}></img>
        <div>{userEmail}</div>
      </div>
      <Button text={'Выйти'} function={logOutClick} />
    </div>
  );
};

export default Logout;
