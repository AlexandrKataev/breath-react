import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './HomePage.module.scss';

import { Breath } from 'widgets/index';

export const HomePage: React.FC = () => {
  return (
    <div className={s.body}>
      <Breath />
    </div>
  );
};
