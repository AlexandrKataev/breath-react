import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './HomePage.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';

import { Breath } from 'widgets/index';
import { selectAuth } from 'processes/Auth/selectors';

import { fetchProgress } from 'widgets/Progress/model/ProgressSlice';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectAuth).id;

  useEffect(() => {
    dispatch(fetchProgress(userId));
  }, []);

  return (
    <div className={s.body}>
      <Breath />
    </div>
  );
};
