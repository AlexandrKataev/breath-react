import React, { useEffect } from 'react';
import s from './Auth.module.scss';

import { useAppDispatch } from 'shared/hooks/redux-hooks';
import { setAuth } from 'processes/Auth/authSlice';
import Login from 'features/Login/Login';
import { useLocalStorageAuth } from 'features/Login/hooks/useLocalStorageAuth';

const Auth: React.FC = () => {
  useLocalStorageAuth();
  return (
    <div className={s.body}>
      <Login />
      <div className={s.description}>{'Авторизуйся и прокачай своё дыхание.'}</div>
    </div>
  );
};

export default Auth;
