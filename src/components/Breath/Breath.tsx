import React from 'react';

import s from './Breath.module.scss';
import breathImage from '../../assets/images/breath.png';
import { useAppSelector } from '../../shared/hooks';
import { selectBreathStarted } from './breathSlice/selectors';

const Breath: React.FC = () => {
  const started = useAppSelector(selectBreathStarted);
  return (
    <div className={s.body}>
      <div id={s.myContainer}>
        <div id={s.myContainer2} className={started ? s.animStart : s.animReverse}></div>
      </div>
    </div>
  );
};

export default Breath;
