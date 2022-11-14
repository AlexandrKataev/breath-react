import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './Home.module.scss';

import Button from 'features/StartButton/StartButton';
import { selectBreathStarted } from 'widgets/Breath/breathSlice/selectors';

import { useAppSelector } from 'shared/hooks/redux-hooks';
import Hint from 'entities/Hint/Hint';
import Difficulty from 'features/Difficulty/Difficulty';
import Lungs from 'entities/Lungs/Lungs';
import Timer from 'features/Timer/Timer';

const Home: React.FC = () => {
  const started = useAppSelector(selectBreathStarted);

  return (
    <div className={s.body}>
      <Lungs />
      {!started ? <Button /> : <Timer />}

      {started ? <Hint /> : <Difficulty />}
    </div>
  );
};

export default Home;
