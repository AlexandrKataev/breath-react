import React from 'react';
import s from './Progress.module.scss';

import Header from 'widgets/Header/Header';

import ProgressBar from 'components/ProgressBar/ProgressBar';

const ProgressPage: React.FC = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default ProgressPage;
