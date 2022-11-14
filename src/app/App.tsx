import React from 'react';

import './App.scss';
import Routing from 'pages/Routing';
import Header from 'widgets/Header/Header';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Header />
      <Routing />
    </div>
  );
};

export default App;
