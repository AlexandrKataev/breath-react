import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

// const dispatch = useAppDispatch();

// dispatch(
// 	setAuth({
// 		email: result.user.email,
// 		token: token,
// 		id: user.uid,
// 	}),
// );
