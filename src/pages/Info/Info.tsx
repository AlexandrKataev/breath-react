import React from 'react';
import s from './Info.module.scss';

import Header from '../../components/Header/Header';

const Info: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={s.body}>Info</div>
    </div>
  );
};

export default Info;
