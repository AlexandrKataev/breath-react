import React from 'react';
import { useAppSelector } from '../../shared/hooks';
import { selectBreathHint } from '../Breath/breathSlice/selectors';
import s from './Bar.module.scss';

const Bar: React.FC = () => {
  const hint = useAppSelector(selectBreathHint);
  return (
    <>
      <div className={s.hint}>{hint}</div>
      <div className={s.body}>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar_active}></div>
        <div className={s.bar_active}></div>
        <div className={s.bar_active}></div>
      </div>
    </>
  );
};

export default Bar;
