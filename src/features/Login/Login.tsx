import React from 'react';

import s from './Login.module.scss';
import Button from 'shared/ui/Button/Button';
// import { handleLogin } from './hooks/useHandleLogin';
import { useLocalStorageAuth } from './hooks/useLocalStorageAuth';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setAuth } from 'processes/Auth/authSlice';
import { useAppDispatch } from 'shared/hooks/redux-hooks';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  // useLocalStorageAuth();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        dispatch(
          setAuth({
            email: result.user.email,
            token: token,
            id: user.uid,
          }),
        );
        if (result) {
          window.localStorage.setItem(
            'auth',
            JSON.stringify({
              email: result.user.email,
              token: token,
              id: user.uid,
            }),
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className={s.reg_choose}>
        <div className={s.reg_active}>{'Войти с Google'}</div>
      </div>
      <Button text={'Войти'} function={handleLogin} />
    </>
  );
};

export default Login;
