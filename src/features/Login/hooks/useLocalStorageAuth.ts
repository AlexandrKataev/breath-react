import { setAuth } from 'processes/Auth/authSlice';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/store/hooks';

export const useLocalStorageAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const authFromLocalStorage = window.localStorage.getItem('auth');
    if (authFromLocalStorage) {
      dispatch(setAuth(JSON.parse(authFromLocalStorage)));
    }
  }, []);
};
