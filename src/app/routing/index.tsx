import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'processes/Auth/hooks/use-auth';

import { AuthPage, HomePage, InfoPage, ProgressPage } from 'pages/index';

const Routing: React.FC = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default Routing;
