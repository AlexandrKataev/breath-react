import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectBreathDifficulty } from 'widgets/Breath/model/selectors';

import { ReactComponent as Minus } from 'shared/ui/icons/minus.svg';
import { ReactComponent as Plus } from 'shared/ui/icons/plus.svg';

import s from './Difficulty.module.scss';
import { minusDifficulty, plusDifficulty, setTimings } from 'widgets/Breath/model/breathSlice';
import { useDifficultyFromLocalStorage } from './hooks/useDifficultyFromLocalStorage';

export const Difficulty: FC = () => {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector(selectBreathDifficulty);

  useDifficultyFromLocalStorage();

  useEffect(() => {
    dispatch(setTimings());
    window.localStorage.setItem('difficulty', JSON.stringify(difficulty));
  }, [difficulty]);

  const onClickMinus = () => {
    difficulty && dispatch(minusDifficulty());
  };
  const onClickPlus = () => {
    difficulty <= 34 && dispatch(plusDifficulty());
  };

  return (
    <div className={s.body}>
      <Minus className={!difficulty ? s.inActive : s.active} onClick={onClickMinus} />

      <div className={s.value}>
        <div>{difficulty + 5}</div>
      </div>
      <Plus className={difficulty > 34 ? s.inActive : s.active} onClick={onClickPlus} />
    </div>
  );
};

export default Difficulty;
