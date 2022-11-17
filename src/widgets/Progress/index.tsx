import React, { useEffect } from 'react';

import s from './Progress.module.scss';

import { ProgressBar } from 'entities/index';
import { Difficulty } from 'features/index';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { fetchProgress } from './model/ProgressSlice';

export const Progress: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectAuth).id;

  useEffect(() => {
    dispatch(fetchProgress(userId));
  }, []);

  return (
    <div>
      <div className={s.progress}>
        <ProgressBar />
      </div>
      <Difficulty />
    </div>
  );
};
