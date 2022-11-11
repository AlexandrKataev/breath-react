import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { start } from '../Breath/breathSlice/breathSlice';
import { selectBreathStarted, selectTime } from '../Breath/breathSlice/selectors';
import s from './StartButton.module.scss';

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const started = useAppSelector(selectBreathStarted);
  const time = useAppSelector(selectTime);

  const onClickStart = () => {
    dispatch(start(!started));
  };

  return (
    <div>
      <button className={!started ? s.start_button : s.start_button_started} onClick={onClickStart}>
        <div className={!started ? s.start_button_text : s.start_button_text_started}>
          {!started ? 'Start' : time}
        </div>
      </button>
    </div>
  );
};

export default StartButton;