import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './Home.module.scss';
import { start } from '../../components/Breath/breathSlice/breathSlice';
import Breath from '../../components/Breath/Breath';
import Button from '../../components/Button/StartButton';
import Header from '../../components/Header/Header';
import Bar from '../../components/Bar/Bar';
import { useSelector } from 'react-redux';
import {
  selectBreathItter,
  selectBreathStarted,
  selectTime,
} from '../../components/Breath/breathSlice/selectors';
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const started = useAppSelector(selectBreathStarted);
  const time = useAppSelector(selectTime);
  const itter = useAppSelector(selectBreathItter);

  const onClickStop = () => {
    dispatch(start(!started));
  };

  return (
    <div className={s.body}>
      <Header></Header>
      <Breath></Breath>
      {!started && <Button />}
      {started && (
        <div onClick={onClickStop} className={s.circle}>
          <CircularProgressbarWithChildren
            value={itter * 10.8 + 3}
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
            })}>
            <div className={s.text}>{time}</div>
          </CircularProgressbarWithChildren>
        </div>
      )}

      {started && <Bar></Bar>}
    </div>
  );
};

export default Home;
