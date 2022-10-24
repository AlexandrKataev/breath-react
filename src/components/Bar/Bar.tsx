import React, { FormEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectBreathDifficulty } from '../Breath/breathSlice/selectors';

import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';

import s from './Bar.module.scss';
import { minusDifficulty, plusDifficulty, setTimings } from '../Breath/breathSlice/breathSlice';

const Bar: React.FC = () => {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector(selectBreathDifficulty);

  useEffect(() => {
    dispatch(setTimings());
  }, [difficulty]);

  const onClickMinus = () => {
    difficulty && dispatch(minusDifficulty());
  };
  const onClickPlus = () => {
    dispatch(plusDifficulty());
  };

  return (
    <div className={s.body}>
      <img src={minus} className={!difficulty ? s.inActive : ''} onClick={onClickMinus}></img>
      <div className={s.value}>{difficulty + 5}</div>
      <img src={plus} onClick={onClickPlus}></img>
    </div>
  );
};

export default Bar;
