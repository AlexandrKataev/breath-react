import { useEffect } from 'react';

import { start } from '../breathSlice';

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux-hooks';
import { selectBreathVdohTime } from '../selectors';

export const useSetAnimSpeed = () => {
  const dispatch = useAppDispatch();
  const vdohTime = useAppSelector(selectBreathVdohTime);

  useEffect(() => {
    // @ts-ignore
    document.querySelector(':root')?.style.setProperty('--animTime', vdohTime + 's');

    // console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--animTime'));
    return () => {
      dispatch(start(false));
    };
  }, [vdohTime]);
};
