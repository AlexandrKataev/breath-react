import React from 'react';
import { useAppSelector } from 'shared/hooks/redux-hooks';
import { selectBreathDifficulty } from 'widgets/Breath/breathSlice/selectors';
import { selectProgressState } from 'widgets/Progress/ProgressSlice/selectors';

import s from './ProgressBar.module.scss';

const ProgressBar: React.FC = () => {
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

  const items = arr.map((el, i) => {
    if (i < 30) return <div key={i} className={el ? s.item_active : s.item} />;
  });

  const items2 = arr.map((el, i) => {
    if (i >= 30 && i < 60) return <div key={i} className={el ? s.item_active : s.item} />;
  });

  const items3 = arr.map((el, i) => {
    if (i >= 60 && i < 90) return <div key={i} className={el ? s.item_active : s.item} />;
  });

  return (
    <div className={s.main}>
      <div className={s.progress_columns}>
        <div className={s.bar_container}>{items}</div>
        <div className={s.bar_container}>{items2}</div>
        <div className={s.bar_container}>{items3}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
