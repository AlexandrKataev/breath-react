import { useAppSelector } from 'app/store/hooks';
import { selectBreathDifficulty } from 'widgets/Breath/model/selectors';
import { selectProgressState } from '../selectors';

export const useProgressCount = () => {
  const progress = useAppSelector(selectProgressState);
  const currentDifficulty = useAppSelector(selectBreathDifficulty);
  const count = progress[currentDifficulty];
  let arr = new Array(90);

  for (let i = 0; i < 90; i++) {
    arr[i] = false;
  }
  for (let i = 0; i < count; i++) {
    arr[i] = true;
  }
  return arr;
};
