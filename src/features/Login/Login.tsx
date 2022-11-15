import React from 'react';

import s from './Login.module.scss';
import Button from 'shared/ui/Button/Button';
import { useLocalStorageAuth } from './hooks/useLocalStorageAuth';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setAuth } from 'processes/Auth/authSlice';
import { useAppDispatch } from 'shared/hooks/redux-hooks';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  useLocalStorageAuth();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
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
      <div className={s.body}>
        <div className={s.title}>{'Войти с Google'}</div>
        <Button text={'Войти'} function={handleLogin} />
      </div>
    </>
  );
};

export default Login;
