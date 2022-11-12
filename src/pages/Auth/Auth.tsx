import React from 'react';
import s from './Auth.module.scss';

import { useAppDispatch } from 'shared/hooks/redux-hooks';
import { setAuth } from 'processes/Auth/authSlice';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        // const user = result.user;
        dispatch(
          setAuth({
            email: result.user.email,
            //@ts-ignore
            token: result.user.accessToken,
            id: result.user.uid,
          }),
        );
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
        <div className={s.reg_active}>Login with Google</div>
      </div>
      <button className={s.button} onClick={handleLogin}>
        {'Login'}
      </button>
      <div className={s.description}>Register, to use more functional</div>
    </div>
  );
};

export default Auth;
