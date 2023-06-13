import { FC } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './Breath.module.scss';

import { Lungs, Hint } from 'entities/index';
import { StartButton, Timer, Difficulty } from 'features/index';

import { selectBreathStarted } from 'widgets/Breath/model/selectors';
import { useAppSelector } from 'app/store/hooks';

import { useTimer } from './model/hooks/useTimer';
import { useSetAnimSpeed } from './model/hooks/useSetAnimSpeed';
import { useFetchProgress } from 'widgets/Progress/model/hooks/useFetchProgress';

export const Breath: FC = () => {
  const started = useAppSelector(selectBreathStarted);

  useTimer();
  useSetAnimSpeed();
  useFetchProgress();

  return (
    <div className={s.body}>
      <Lungs />
      {!started ? <StartButton /> : <Timer />}
      {started ? <Hint /> : <Difficulty />}
    </div>
  );
};
