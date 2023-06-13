import { FC } from 'react';
import s from './Timer.module.scss';

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { start } from 'widgets/Breath/model/breathSlice';
import { selectBreathItter, selectBreathStarted, selectTime } from 'widgets/Breath/model/selectors';

export const Timer: FC = () => {
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
        strokeWidth={3}
        // text={!started ? 'Start' : String(time)}
        styles={buildStyles({
          textSize: '40px',
          strokeLinecap: 'round',
          pathTransitionDuration: time,
          pathColor: 'var(--p)',
          textColor: 'var(--p)',
          trailColor: 'var(--b3)',
          backgroundColor: '#cd82a5',
          pathTransition: 'linear',
        })}>
        <div className={s.text}>{time}</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
