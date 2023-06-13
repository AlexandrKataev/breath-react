import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setReady } from 'widgets/Breath/model/breathSlice';
import { selectBreathHint, selectTime } from 'widgets/Breath/model/selectors';
import s from './Hint.module.scss';

export const Hint: FC = () => {
  const dispatch = useAppDispatch();
  const hint = useAppSelector(selectBreathHint);
  const time = useAppSelector(selectTime);

  useEffect(() => {
    if (time === 1) {
      dispatch(setReady());
    }
  }, [time]);

  return <div className={s.hint}>{hint}</div>;
};
