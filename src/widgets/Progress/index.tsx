import React, { useEffect } from 'react';

import s from './Progress.module.scss';

import { ProgressBar } from 'entities/index';
import { Difficulty } from 'features/index';

import { useFetchProgress } from './model/hooks/useFetchProgress';

export const Progress: React.FC = () => {
  useFetchProgress();

  return (
    <div>
      <div className={s.progress}>
        <ProgressBar />
      </div>
      <Difficulty />
    </div>
  );
};
