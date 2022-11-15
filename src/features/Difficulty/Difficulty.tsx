import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { selectBreathDifficulty } from 'widgets/Breath/breathSlice/selectors';

import { ReactComponent as Minus } from 'shared/ui/icons/minus.svg';
import { ReactComponent as Plus } from 'shared/ui/icons/plus.svg';

import s from './Difficulty.module.scss';
import {
  minusDifficulty,
  plusDifficulty,
  setDifficulty,
  setTimings,
} from 'widgets/Breath/breathSlice/breathSlice';

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
      <Minus className={!difficulty ? s.inActive : s.active} onClick={onClickMinus} />

      <div className={s.value}>
        <div>{difficulty + 5}</div>
      </div>
      <Plus className={s.active} onClick={onClickPlus} />
    </div>
  );
};

export default Difficulty;
