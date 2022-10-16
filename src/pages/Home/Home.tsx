import React from 'react';
import s from './Home.module.scss';
import Breath from '../../components/Breath/Breath';
import Button from '../../components/Button/StartButton';
import Header from '../../components/Header/Header';
import Bar from '../../components/Bar/Bar';
import { useSelector } from 'react-redux';
import { selectBreathStarted } from '../../components/Breath/breathSlice/selectors';

const Home: React.FC = () => {
  const started = useSelector(selectBreathStarted);

  return (
    <div className={s.body}>
      <Header></Header>
      <Breath></Breath>
      <Button />
      {started && <Bar></Bar>}
    </div>
  );
};

export default Home;
