import React from 'react';
import s from './Timer.module.scss';

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { start } from 'widgets/Breath/breathSlice/breathSlice';
import {
  selectBreathIsVidoh,
  selectBreathItter,
  selectBreathStarted,
  selectTime,
} from 'widgets/Breath/breathSlice/selectors';

const Timer = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector(selectTime);
  const itter = useAppSelector(selectBreathItter);
  const started = useAppSelector(selectBreathStarted);

  const onClickStop = () => {
    dispatch(start(!started));
  };

  return (
    <div onClick={onClickStop} className={s.circle}>
      <CircularProgressbarWithChildren
        value={itter * 10 + 1}
        // circleRatio={0.1}
        strokeWidth={2.5}
        // text={!started ? 'Start' : String(time)}
        styles={buildStyles({
          textSize: '40px',
          strokeLinecap: 'round',
          pathTransitionDuration: time,
          pathColor: '#cd82a5',
          textColor: '#cd82a5',
          trailColor: '#cd82a54f',
          backgroundColor: '#cd82a5',
          pathTransition: 'linear',
        })}>
        <div className={s.text}>{time}</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Timer;
