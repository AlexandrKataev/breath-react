import { selectAuth } from 'processes/Auth/selectors';
import { selectProgressState } from 'widgets/Progress/model/selectors';
import { selectBreathDifficulty } from '../selectors';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';

import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathIsZad,
  selectBreathItter,
  selectBreathStarted,
  selectBreathVdohTime,
  selectBreathZadTime,
  selectTime,
} from '../selectors';
import {
  nextItter,
  setIsVdoh,
  setIsVidoh,
  setIsZad,
  start,
  setTime,
  timeMinus,
  resetItter,
  stop,
} from '../breathSlice';
import { pushProgress, updateProgress } from 'widgets/Progress/model/ProgressSlice';

export const useTimer = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectAuth).id;
  const difficulty = useAppSelector(selectBreathDifficulty);
  const progress = useAppSelector(selectProgressState);

  const zadTime = useAppSelector(selectBreathZadTime);
  const vdohTime = useAppSelector(selectBreathVdohTime);

  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);
  const itter = useAppSelector(selectBreathItter);
  const time = useAppSelector(selectTime);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(timeMinus());
      console.log(time);
    }, 1000);

    if (!started) {
      clearInterval(timer);
      dispatch(resetItter());
    } else if (started) {
      updateProgress(difficulty);
      if (isVdoh && itter < 10 && !time) {
        dispatch(setIsZad());
        dispatch(setTime(zadTime[itter]));
      } else if (isZad && itter < 10 && !time) {
        dispatch(setIsVidoh());
        dispatch(setTime(vdohTime));
        dispatch(nextItter());
      } else if (isVidoh && itter < 10 && !time) {
        dispatch(setIsVdoh());
        dispatch(setTime(vdohTime));
      } else if (isVidoh && itter === 10 && !time) {
        dispatch(start(false));
        clearInterval(timer);
        dispatch(resetItter());
        dispatch(pushProgress({ userId, progress, difficulty }));
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [started, time]);
  // return { isVdoh, isVidoh, isZad, started };
};
