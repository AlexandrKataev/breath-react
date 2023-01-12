import { FC } from 'react';

import { useProgressCount } from 'widgets/Progress/model/hooks/useProgressCount';

import s from './ProgressBar.module.scss';

export const ProgressBar: FC = () => {
  const arr = useProgressCount();

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
