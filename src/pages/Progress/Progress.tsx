import React from 'react';
import s from './Progress.module.scss';

import Header from 'components/Header/Header';
import Reg from 'components/Reg/Reg';

import ProgressBar from 'components/ProgressBar/ProgressBar';

const ProgressPage: React.FC = () => {
  const isAuth = true;
  return (
    <div>
      <Header />
      {isAuth ? <ProgressBar /> : <Reg />}
    </div>
  );
};

export default ProgressPage;
