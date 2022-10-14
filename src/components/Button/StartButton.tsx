import React from 'react';
import s from './StartButton.module.scss';

const StartButton: React.FC = () => {
  return (
    <div>
      <button className={s.start_button}>
        <div className={s.start_button_text}>Start</div>
      </button>
    </div>
  );
};

export default StartButton;
