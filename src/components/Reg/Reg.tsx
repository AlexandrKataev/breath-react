import React, { useEffect, useState } from 'react';
import s from './Reg.module.scss';

import { selectMail, selectUserName } from './regSlice/selectors';
import { setPassword, setUserName } from './regSlice/regSlice';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

const Reg: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const userName = useAppSelector(selectUserName);
  const mail = useAppSelector(selectMail);
  const dispatch = useAppDispatch();

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <div className={s.body}>
      <div className={s.reg_choose}>
        <div className={!isRegister ? s.reg_active : s.reg} onClick={() => setIsRegister(false)}>
          Login
        </div>
        <div className={isRegister ? s.reg_active : s.reg} onClick={() => setIsRegister(true)}>
          Register
        </div>
      </div>

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
      <button className={s.button}>{isRegister ? 'Register' : 'Login'}</button>
      <div className={s.description}>Register, to use more functional</div>
    </div>
  );
};

export default Reg;
