import React from 'react';
import s from './Reg.module.scss';

import Header from '../../components/Header/Header';

const Reg: React.FC = () => {
  let value = 'name';
  const onChangeInput = () => {
    console.log(value);
  };
  return (
    <div>
      <Header />
      <div className={s.body}>
        <h1>Registration</h1>
        <input
          value={value}
          onChange={onChangeInput}
          // ref={inputRef}
          className={s.input}
          placeholder="Поиск пиццы"
        />
        <input
          value={value}
          onChange={onChangeInput}
          // ref={inputRef}
          className={s.input}
          placeholder="Поиск пиццы"
        />
        <button className={s.button}>Register</button>
        <div className={s.description}>Register, to use more functional</div>
      </div>
    </div>
  );
};

export default Reg;
