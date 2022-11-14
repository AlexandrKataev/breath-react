import React from 'react';

import ProgressBar from 'entities/ProgressBar/ProgressBar';
import Difficulty from 'features/Difficulty/Difficulty';

const ProgressPage: React.FC = () => {
  return (
    <div>
      <ProgressBar />
      <Difficulty />
    </div>
  );
};

export default ProgressPage;
