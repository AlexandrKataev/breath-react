import React from 'react';
import s from './Reg.module.scss';

import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectMail, selectUserName } from './regSlice/selectors';
import { setPassword, setUserName } from './regSlice/regSlice';

const Reg: React.FC = () => {
  const userName = useSelector(selectUserName);
  const mail = useSelector(selectMail);
  const dispatch = useDispatch();

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <div>
      <Header />
      <div className={s.body}>
        <h1>Registration</h1>
        <input
          value={userName}
          onChange={onChangeUserName}
          // ref={inputRef}
          className={s.input}
          placeholder="Name"
        />
        <input
          value={mail}
          onChange={onChangePassword}
          // ref={inputRef}
          className={s.input}
          placeholder="Password"
        />
        <button className={s.button}>Register</button>
        <div className={s.description}>Register, to use more functional</div>
      </div>
    </div>
  );
};

export default Reg;
