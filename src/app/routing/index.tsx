import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'shared/hooks/use-auth';

import { AuthPage, HomePage, InfoPage, ProgressPage } from 'pages/index';

const Routing = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Routes>
      <Route path="/breath-react/home" element={<HomePage />} />
      <Route path="/breath-react/info" element={<InfoPage />} />
      <Route path="/breath-react/progress" element={<ProgressPage />} />
      <Route path="*" element={<Navigate to="/breath-react/home" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/breath-react/auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/breath-react/auth" replace />} />
    </Routes>
  );
};

export default Routing;
