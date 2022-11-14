import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'shared/hooks/use-auth';

import Auth from './Auth/Auth';
import Home from './Home/Home';
import Info from './Info/Info';
import ProgressPage from './Progress/Progress';

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
