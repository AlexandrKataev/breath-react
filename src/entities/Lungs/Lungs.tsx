import React from 'react';
import cx from 'classnames';

import s from './Lungs.module.scss';
import { useAppSelector } from 'shared/hooks/redux-hooks';
import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathIsZad,
  selectBreathStarted,
} from 'widgets/Breath/breathSlice/selectors';

import { useTimer } from 'widgets/Breath/hooks/useTimer';
import { useSetAnimSpeed } from 'widgets/Breath/hooks/useSetAnimSpeed';

const Breath: React.FC = () => {
  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);

  useTimer();

  useSetAnimSpeed();

  return (
    <div className={s.body}>
      <div id={s.myContainer}>
        <div
          id={s.myContainer2}
          className={cx(
            { [s.animVdoh]: isVdoh && started },
            { [s.animVidoh]: isVidoh && started },
            { [s.animZad]: isZad && started },
          )}></div>
      </div>
    </div>
  );
};

export default Breath;
