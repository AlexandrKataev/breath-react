import React from 'react';
import s from './Button.module.scss';

const Button: React.FC = () => {
  return (
    <div>
      <button className={s.button}>
        <div className={s.button_text}>Старт</div>
      </button>
    </div>
  );
};

export default Button;
