import React from 'react';

import s from './StartButton.module.scss';

import { ReactComponent as Start } from 'shared/ui/icons/start.svg';

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
      <button className={s.start_button} onClick={onClickStart}>
        <Start className={s.start_icon} />
      </button>
    </div>
  );
};

export default StartButton;
