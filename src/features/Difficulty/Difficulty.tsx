import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { selectBreathDifficulty } from 'components/Breath/breathSlice/selectors';

import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';

import s from './Difficulty.module.scss';
import {
  minusDifficulty,
  plusDifficulty,
  setDifficulty,
  setTimings,
} from 'components/Breath/breathSlice/breathSlice';

const Difficulty: React.FC = () => {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector(selectBreathDifficulty);
  useEffect(() => {
    const difficultyFromLocalStorage = window.localStorage.getItem('difficulty');
    if (difficultyFromLocalStorage) {
      dispatch(setDifficulty(Number(difficultyFromLocalStorage)));
    }
  }, []);

  useEffect(() => {
    dispatch(setTimings());
    window.localStorage.setItem('difficulty', JSON.stringify(difficulty));
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

export default Difficulty;
