import { selectBreathDifficulty } from 'components/Breath/breathSlice/selectors';
import React, { useEffect } from 'react';
import { useAppSelector } from 'shared/hooks';
import { arrayBuffer } from 'stream/consumers';
import s from './ProgressBar.module.scss';

const ProgressBar: React.FC = () => {
  const difficulty = useAppSelector(selectBreathDifficulty);
  const count = 15;
  let arr = new Array(30);
  for (let i = 0; i < 30; i++) {
    arr[i] = false;
  }
  for (let i = 0; i < count; i++) {
    arr[i] = true;
  }
  console.log(arr);

  const items = arr.map((el) => {
    return <div className={el ? s.item_active : s.item} />;
  });

  return (
    <div className={s.main}>
      <div className={s.bar_container}>{items}</div>
      <div className={s.difficulty}>{difficulty + 5}</div>
    </div>
  );
};

export default ProgressBar;
