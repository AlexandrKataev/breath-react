import React from 'react';

import s from './StartButton.module.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { start } from 'widgets/Breath/breathSlice/breathSlice';
import { selectBreathStarted, selectTime } from 'widgets/Breath/breathSlice/selectors';

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
