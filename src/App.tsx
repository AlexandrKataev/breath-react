import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Progress from './pages/Progress/Progress';
import Reg from './pages/Reg';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/breath-react/" element={<Home></Home>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/progress" element={<Progress></Progress>} />
        <Route path="/auth" element={<Auth></Auth>} />
        <Route path="/reg" element={<Reg></Reg>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
};

export default App;
