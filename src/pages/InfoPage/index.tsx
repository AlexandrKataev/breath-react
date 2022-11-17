import React from 'react';
import s from './InfoPage.module.scss';

import { ReactComponent as ProgressIcon } from 'shared/ui/icons/progress.svg';
import { ReactComponent as DayIcon } from 'shared/ui/icons/day2.svg';
import { ReactComponent as DaysIcon } from 'shared/ui/icons/days.svg';
import { ReactComponent as PlusIcon } from 'shared/ui/icons/plus.svg';
import BreathIcon from 'shared/ui/icons/breath.png';
import { Logout } from 'features/index';

export const InfoPage: React.FC = () => {
  return (
    <div className={s.body}>
      <div className={s.title}>
        <div>{'Дыхательная гимнастика по таблицам дыхания Алчевского'}</div>
      </div>
      <div className={s.description}>
        <div className={s.item}>
          <PlusIcon className={s.icon} />
          <div>{'Найдите комфортную для себя сложность'}</div>
        </div>
        <div className={s.item}>
          <img src={BreathIcon} className={s.icon} />
          <div>
            {'Выполняйте плавный вдох через нос, и легкий выдох через рот без форсирования воздуха'}
          </div>
        </div>
        <div className={s.item}>
          <ProgressIcon className={s.icon} />
          <div>{'Следите за своим прогрессом'}</div>
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
