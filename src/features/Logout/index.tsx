import React from 'react';
import s from './Logout.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { exitAuth } from 'processes/Auth/authSlice';
import { selectAuth } from 'processes/Auth/selectors';

import { ReactComponent as UserIcon } from 'shared/ui/icons/user.svg';
import Button from 'shared/ui/Button/Button';

export const Logout = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(selectAuth).email;

  const logOutClick = () => {
    window.localStorage.removeItem('auth');
    dispatch(exitAuth());
  };
  return (
    <div className={s.body}>
      <div className={s.user}>
        <UserIcon className={s.icon} />
        <div>{userEmail}</div>
      </div>
      <Button text={'Выйти'} function={logOutClick} />
    </div>
  );
};
