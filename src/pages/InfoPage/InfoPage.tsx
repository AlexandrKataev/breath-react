import React from 'react';
import s from './InfoPage.module.scss';

import { ReactComponent as ProgressIcon } from 'shared/ui/icons/progress.svg';
import { ReactComponent as DayIcon } from 'shared/ui/icons/day2.svg';
import { ReactComponent as DaysIcon } from 'shared/ui/icons/days.svg';
import Logout from 'features/Logout/Logout';

const Info: React.FC = () => {
  return (
    <div className={s.body}>
      <h1>{'Дыхательная гимнастика по таблицам дыхания Алчевского'}</h1>
      <div className={s.description}>
        <div className={s.item}>
          <ProgressIcon className={s.icon} />
          <div>{'Следите за своим прогрессом.'}</div>
        </div>
        <div className={s.item}>
          <DayIcon className={s.icon} />
          <div>{'Выполняйте упражнение три раза в день'}</div>
        </div>
        <div className={s.item}>
          <DaysIcon className={s.icon} />
          <div>{`Пройдите 30 дней и увеличивайте сложность`}</div>
        </div>
      </div>

      <Logout />
    </div>
  );
};

export default Info;
