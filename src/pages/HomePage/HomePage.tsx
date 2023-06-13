import { FC } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './HomePage.module.scss';

import { Breath } from 'widgets';

export const HomePage: FC = () => {
  return (
    <div className={s.body}>
      <Breath />
    </div>
  );
};
