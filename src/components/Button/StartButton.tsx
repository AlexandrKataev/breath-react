import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from '../Breath/breathSlice/breathSlice';
import { selectBreathStarted } from '../Breath/breathSlice/selectors';
import s from './StartButton.module.scss';

const StartButton: React.FC = () => {
  const dispatch = useDispatch();
  const started = useSelector(selectBreathStarted);
  const onClickStart = () => {
    dispatch(start(!started));
  };
  return (
    <div>
      <button className={s.start_button} onClick={() => onClickStart()}>
        <div className={s.start_button_text}>Start</div>
      </button>
    </div>
  );
};

export default StartButton;
