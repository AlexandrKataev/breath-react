import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './Breath.module.scss';

import { Lungs, Hint } from 'entities/index';
import { StartButton, Timer, Difficulty } from 'features/index';

import { selectBreathStarted } from 'widgets/Breath/model/selectors';
import { useAppSelector } from 'shared/hooks/redux-hooks';

import { useTimer } from './model/hooks/useTimer';
import { useSetAnimSpeed } from './model/hooks/useSetAnimSpeed';

export const Breath: React.FC = () => {
  const started = useAppSelector(selectBreathStarted);

  useTimer();

  useSetAnimSpeed();

  return (
    <div className={s.body}>
      <Lungs />
      {!started ? <StartButton /> : <Timer />}
      {started ? <Hint /> : <Difficulty />}
    </div>
  );
};
