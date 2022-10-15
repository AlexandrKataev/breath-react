import React from 'react';
import s from './Bar.module.scss';

const Bar: React.FC = () => {
  return (
    <>
      <div className={s.hint}>Вдох</div>
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
