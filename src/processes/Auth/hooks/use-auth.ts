import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { setAuth } from '../authSlice';

export const useAuth = () => {
  const { email, id } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const authFromLocalStorage = window.localStorage.getItem('auth');
  if (authFromLocalStorage) {
    dispatch(setAuth(JSON.parse(authFromLocalStorage)));
  }

  return {
    isAuth: !!email,
    email,
    id,
  };
};
