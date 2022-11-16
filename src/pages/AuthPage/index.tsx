import React from 'react';
import s from './AuthPage.module.scss';

import { Login } from 'features/index';
import { useLocalStorageAuth } from 'features/Login/hooks/useLocalStorageAuth';

export const AuthPage: React.FC = () => {
  useLocalStorageAuth();
  return (
    <div className={s.body}>
      <Login />
      <div className={s.description}>{'Авторизуйся и прокачай своё дыхание'}</div>
    </div>
  );
};
