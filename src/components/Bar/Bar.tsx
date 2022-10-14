import React from 'react';
import s from './Bar.module.scss';

const Bar: React.FC = () => {
  return (
    <div className={s.body}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </div>
  );
};

export default Bar;
