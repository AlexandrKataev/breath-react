import React from 'react';

import s from './StartButton.module.scss';

import { ReactComponent as Start } from 'shared/ui/icons/start.svg';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { start } from 'widgets/Breath/model/breathSlice';
import {
  selectBreathDifficulty,
  selectBreathStarted,
  selectTime,
} from 'widgets/Breath/model/selectors';
import { pushProgress, updateProgress } from 'widgets/Progress/model/ProgressSlice';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../firebase';
import { selectAuth } from 'processes/Auth/selectors';
import { selectProgressState } from 'widgets/Progress/model/selectors';

export const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const started = useAppSelector(selectBreathStarted);
  const time = useAppSelector(selectTime);

  const difficulty = useAppSelector(selectBreathDifficulty);
  const userId = useAppSelector(selectAuth).id;
  const progress = useAppSelector(selectProgressState);

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
