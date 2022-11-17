import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectAuth } from 'processes/Auth/selectors';
import { useEffect } from 'react';
import { fetchProgress } from '../ProgressSlice';

export const useFetchProgress = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectAuth).id;
  useEffect(() => {
    dispatch(fetchProgress(userId));
  }, []);
};
