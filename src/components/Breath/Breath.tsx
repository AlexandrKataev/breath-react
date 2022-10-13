import React from 'react';

import s from './Breath.module.scss';
import breathImage from '../../assets/images/breath.png';

const Breath: React.FC = () => {
  return (
    <div>
      <div className={s.body}>
        <img className={s.breath} src={breathImage} alt="image not found"></img>
      </div>
    </div>
  );
};

export default Breath;
