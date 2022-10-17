import React, { useEffect, useRef } from 'react';
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
} from './breathSlice/selectors';
import { nextItter, setIsVdoh, setIsVidoh, setIsZad, start } from './breathSlice/breathSlice';

const Breath: React.FC = () => {
  const dispatch = useAppDispatch();

  const zadTime = useAppSelector(selectBreathZadTime);
  const vdohTime = useAppSelector(selectBreathVdohTime);

  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);
  const itter = useAppSelector(selectBreathItter);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;
    clearTimeout(timer);
    // console.log('render');
    if (started) {
      clearTimeout(timer);
      dispatch(setIsVdoh());
      console.log('vdoh', vdohTime);
      // @ts-ignore
      document.querySelector(':root').style.setProperty('--animTime', vdohTime / 1000 + 's');

      timer = setTimeout(() => {
        dispatch(setIsZad());
        console.log('zad', zadTime[itter]);
      }, vdohTime);

      timer = setTimeout(() => {
        dispatch(setIsVidoh());
        console.log('vidoh', vdohTime);
      }, vdohTime + zadTime[itter]);

      timer = setTimeout(() => {
        dispatch(nextItter());
      }, vdohTime * 2 + zadTime[itter]);
    } else {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
      console.log('stop');
    };
  }, [started, itter]);

  useEffect((): any => {
    // @ts-ignore
    document.querySelector(':root').style.setProperty('--animTime', vdohTime / 1000 + 's');
    // @ts-ignore
    console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--animTime'));
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
