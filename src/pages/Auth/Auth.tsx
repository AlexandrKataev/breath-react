import React, { useEffect } from 'react';
import s from './Auth.module.scss';

import { useAppDispatch } from 'shared/hooks/redux-hooks';
import { setAuth } from 'processes/Auth/authSlice';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Button from 'shared/ui/Button/Button';

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authFromLocalStorage = window.localStorage.getItem('auth');
    if (authFromLocalStorage) {
      dispatch(setAuth(JSON.parse(authFromLocalStorage)));
    }
  }, []);

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // This gives you a Google Access Token. You can use it to access the Google API.
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
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className={s.body}>
      <div className={s.reg_choose}>
        <div className={s.reg_active}>{'Войти с Google'}</div>
      </div>
      <Button text={'Войти'} function={handleLogin} />
      <div className={s.description}>{'Авторизуйся и прокачай своё дыхание.'}</div>
    </div>
  );
};

export default Auth;
