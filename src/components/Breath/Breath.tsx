import React, { useEffect } from 'react';
import cx from 'classnames';

import s from './Breath.module.scss';
import breathImage from '../../assets/images/breath.png';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathStarted,
  selectBreathZad,
} from './breathSlice/selectors';
import { setIsVdoh, setIsVidoh } from './breathSlice/breathSlice';

const Breath: React.FC = () => {
  const zad = useAppSelector(selectBreathZad);
  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const dispatch = useAppDispatch();
  const itteration = () => {
    dispatch(setIsVdoh(true));
    dispatch(setIsVidoh(false));
    setTimeout(() => {
      dispatch(setIsVdoh(false));
      dispatch(setIsVidoh(true));
    }, 7000 + zad[0] * 1000);
  };

  useEffect(() => {
    started && itteration();
  }, [started]);

  return (
    <div className={s.body}>
      <div id={s.myContainer}>
        <div
          id={s.myContainer2}
          className={cx(
            { [s.animStart]: isVdoh && started },
            { [s.animReverse]: isVidoh && started },
          )}></div>
      </div>
    </div>
  );
};

export default Breath;
