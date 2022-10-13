import React from 'react';
import s from './Home.module.scss';
import Breath from '../../components/Breath/Breath';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <div className={s.body}>
      <Header></Header>
      <Breath></Breath>
      <Button></Button>
    </div>
  );
};

export default Home;
