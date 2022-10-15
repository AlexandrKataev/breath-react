import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home/Home';
import Progress from '../pages/Progress/Progress';
import Info from '../pages/Info/Info';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/breath-react/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/breath-react/info" element={<Info />} />
        <Route path="/breath-react/progress" element={<Progress />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
