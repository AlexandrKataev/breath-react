import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { setReady } from 'widgets/Breath/breathSlice/breathSlice';
import { selectBreathHint, selectTime } from 'widgets/Breath/breathSlice/selectors';
import s from './Hint.module.scss';

const Hint: React.FC = () => {
  const dispatch = useAppDispatch();
  const hint = useAppSelector(selectBreathHint);
  const time = useAppSelector(selectTime);
  useEffect(() => {
    if (time === 1) {
      dispatch(setReady());
    }
  }, [time]);
  return (
    <>
      <div className={s.hint}>{hint}</div>
    </>
  );
};

export default Hint;
