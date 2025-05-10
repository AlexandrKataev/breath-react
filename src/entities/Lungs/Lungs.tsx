import cx from "classnames";
import { FC } from "react";
import s from "./Lungs.module.scss";

import { useAppSelector } from "app/store/hooks";
import {
  selectBreathIsVdoh,
  selectBreathIsVidoh,
  selectBreathIsZad,
  selectBreathStarted,
} from "widgets/Breath/model/selectors";

export const Lungs: FC = () => {
  const started = useAppSelector(selectBreathStarted);
  const isVdoh = useAppSelector(selectBreathIsVdoh);
  const isVidoh = useAppSelector(selectBreathIsVidoh);
  const isZad = useAppSelector(selectBreathIsZad);

  return (
    <div className={cx(s.lungs, { [s.lungsPending]: !started })}>
      <div
        className={cx(
          s.lungs2,
          { [s.animVdoh]: isVdoh && started },
          { [s.animVidoh]: isVidoh && started },
          { [s.animZad]: isZad && started }
        )}></div>
    </div>
  );
};
