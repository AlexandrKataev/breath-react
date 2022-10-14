import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Progress from './pages/Reg/Reg';
import Reg from './pages/Reg/Reg';
import Info from './pages/Info/Info';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/breath-react/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/auth" element={<Auth></Auth>} />
        <Route path="/reg" element={<Reg />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
