import React from 'react';
import s from './Info.module.scss';

import { useAppDispatch } from 'shared/hooks/redux-hooks';
import { exitAuth } from 'processes/Auth/authSlice';

const Info: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className={s.body}>Info</div>
      <button onClick={() => dispatch(exitAuth())}>Выйти</button>
    </div>
  );
};

export default Info;
