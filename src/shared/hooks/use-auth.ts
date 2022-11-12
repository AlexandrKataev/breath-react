import { selectAuth } from 'processes/Auth/selectors';
import { useAppSelector } from './redux-hooks';
export const useAuth = () => {
  const { email, token, id } = useAppSelector(selectAuth);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
