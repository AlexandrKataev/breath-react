import React from 'react';

import s from './Progress.module.scss';

import { ProgressBar } from 'entities/index';
import { Difficulty } from 'features/index';

export const Progress: React.FC = () => {
  return (
    <div>
      <div className={s.progress}>
        <ProgressBar />
      </div>

      <Difficulty />
    </div>
  );
};
