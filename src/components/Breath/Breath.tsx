import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import s from './Breath.module.scss';
import breathImage from '../../assets/images/breath.png';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathIsZad,
  selectBreathItter,
  selectBreathStarted,
  selectBreathVdohTime,
  selectBreathZadTime,
  selectTime,
} from './breathSlice/selectors';
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
} from './breathSlice/breathSlice';

const Breath: React.FC = () => {
  const dispatch = useAppDispatch();

  const zadTime = useAppSelector(selectBreathZadTime);
  const vdohTime = useAppSelector(selectBreathVdohTime);

  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);
  const itter = useAppSelector(selectBreathItter);
  const time = useAppSelector(selectTime);
  // const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(timeMinus());
      console.log(time);
    }, 1000);

    if (!started) {
      clearInterval(timer);
      dispatch(resetItter());
    } else if (started) {
      if (isVdoh && itter < 10 && !time) {
        dispatch(setIsZad());
        dispatch(setTime(zadTime[itter]));
      } else if (isZad && itter < 10 && !time) {
        dispatch(setIsVidoh());
        dispatch(setTime(vdohTime));
      } else if (isVidoh && itter < 10 && !time) {
        dispatch(setIsVdoh());
        dispatch(setTime(vdohTime));
        dispatch(nextItter());
      } else if (isVdoh && itter === 10) {
        dispatch(start(false));
        clearInterval(timer);
        dispatch(resetItter());
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [started, time]);

  useEffect(() => {
    // @ts-ignore
    document.querySelector(':root')?.style.setProperty('--animTime', vdohTime + 's');

    // console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--animTime'));
    return () => {
      dispatch(start(false));
    };
  }, []);

  return (
    <div className={s.body}>
      <div id={s.myContainer}>
        <div
          id={s.myContainer2}
          className={cx(
            { [s.animVdoh]: isVdoh && started },
            { [s.animVidoh]: isVidoh && started },
            { [s.animZad]: isZad && started },
          )}></div>
      </div>
    </div>
  );
};

export default Breath;
