import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './HomePage.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';

import Breath from 'widgets/Breath/Breath';
import { selectAuth } from 'processes/Auth/selectors';

import { collection, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import { selectProgressState } from 'widgets/Progress/ProgressSlice/selectors';
import { fetchProgress, pushProgress } from 'widgets/Progress/ProgressSlice/ProgressSlice';
import { selectBreathStarted } from 'widgets/Breath/breathSlice/selectors';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectAuth).id;
  const progress = useAppSelector(selectProgressState);
  const started = useAppSelector(selectBreathStarted);

  useEffect(() => {
    dispatch(fetchProgress(userId));
  }, []);

  // useEffect(() => {
  //   dispatch(pushProgress({ userId, progress }));
  // }, [started]);

  return (
    <div className={s.body}>
      <Breath />
    </div>
  );
};

export default Home;
