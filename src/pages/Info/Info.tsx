import React from 'react';
import s from './Info.module.scss';

import progressIcon from 'assets/images/progress.png';
import dayIcon from 'assets/images/day.png';
import daysIcon from '../../assets/images/days.png';
import Logout from 'features/Logout/Logout';

const Info: React.FC = () => {
  return (
    <div className={s.body}>
      <h1>{'Дыхательная гимнастика по таблицам дыхания Алчевского'}</h1>
      <div className={s.items}>
        <img src={progressIcon}></img>
        <div>Следите за своим прогрессом.</div>
      </div>
      <div className={s.items}>
        <img src={dayIcon}></img>
        <div>{'Выполняйте упражнение три раза в день'}</div>
      </div>
      <div className={s.items}>
        <img src={daysIcon}></img>
        <div>{`Пройдите 30 дней и увеличивайте сложность`}</div>
      </div>
      <Logout />
    </div>
  );
};

export default Info;
