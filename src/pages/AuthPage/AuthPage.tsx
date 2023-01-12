import { FC } from 'react';
import s from './AuthPage.module.scss';

import { Login } from 'features';

export const AuthPage: FC = () => {
  return (
    <div className={s.body}>
      <Login />
      <div className={s.description}>{'Авторизуйся и прокачай своё дыхание'}</div>
    </div>
  );
};
