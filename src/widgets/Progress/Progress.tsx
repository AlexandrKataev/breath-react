import React, { useEffect } from 'react';

import s from './Progress.module.scss';

import ProgressBar from 'entities/ProgressBar/ProgressBar';
import Difficulty from 'features/Difficulty/Difficulty';

const Progress: React.FC = () => {
  return (
    <div>
      <div className={s.progress}>
        <ProgressBar />
      </div>

      <Difficulty />
    </div>
  );
};

export default Progress;
