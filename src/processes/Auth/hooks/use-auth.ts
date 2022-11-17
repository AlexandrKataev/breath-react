import { useAppSelector } from 'app/store/hooks';
import { selectAuth } from 'processes/Auth/selectors';

export const useAuth = () => {
  const { email, id } = useAppSelector(selectAuth);
  return {
    isAuth: !!email,
    email,
    id,
  };
};
