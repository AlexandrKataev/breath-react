import { FC } from 'react';
import cx from 'classnames';
import s from './Lungs.module.scss';

import { useAppSelector } from 'app/store/hooks';
import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathIsZad,
  selectBreathStarted,
} from 'widgets/Breath/model/selectors';

export const Lungs: FC = () => {
  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);

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
