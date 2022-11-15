import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'shared/hooks/use-auth';

import Auth from './AuthPage/AuthPage';
import Home from './HomePage/HomePage';
import Info from './InfoPage/InfoPage';
import ProgressPage from './ProgressPage/ProgressPage';

const Routing = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Routes>
      <Route path="/breath-react/home" element={<Home />} />
      <Route path="/breath-react/info" element={<Info />} />
      <Route path="/breath-react/progress" element={<ProgressPage />} />
      <Route path="*" element={<Navigate to="/breath-react/home" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/breath-react/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/breath-react/auth" replace />} />
    </Routes>
  );
};

export default Routing;
