import { useAppDispatch } from 'app/store/hooks';
import { useEffect } from 'react';
import { setDifficulty } from 'widgets/Breath/model/breathSlice';

export const useDifficultyFromLocalStorage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const difficultyFromLocalStorage = window.localStorage.getItem('difficulty');
    if (difficultyFromLocalStorage) {
      dispatch(setDifficulty(Number(difficultyFromLocalStorage)));
    }
  }, []);
};
