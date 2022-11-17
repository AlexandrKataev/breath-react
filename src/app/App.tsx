import React from 'react';

import './App.scss';

import { Header } from 'widgets/index';
import Routing from './routing';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Header />
      <Routing />
    </div>
  );
};

export default App;
