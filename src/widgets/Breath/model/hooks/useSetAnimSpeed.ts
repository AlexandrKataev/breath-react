import { useEffect } from 'react';

import { start } from '../breathSlice';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { selectBreathVdohTime } from '../selectors';

export const useSetAnimSpeed = () => {
  const dispatch = useAppDispatch();
  const vdohTime = useAppSelector(selectBreathVdohTime);

  useEffect(() => {
    document.querySelector<HTMLElement>(':root')?.style.setProperty('--animTime', vdohTime + 's');

    return () => {
      dispatch(start(false));
    };
  }, [vdohTime]);
};
