import React from 'react';
import s from './Home.module.scss';
import Breath from '../../components/Breath/Breath';
import Button from '../../components/Button/StartButton';
import Header from '../../components/Header/Header';
import Bar from '../../components/Bar/Bar';

const Home: React.FC = () => {
  return (
    <div className={s.body}>
      <Header></Header>
      <Breath></Breath>
      <Button></Button>
      <Bar></Bar>
    </div>
  );
};

export default Home;
