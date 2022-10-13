import React from 'react';
import s from './Progress.module.scss';

import Header from '../../components/Header/Header';

const Progress: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={s.body}>Progress</div>
    </div>
  );
};

export default Progress;
