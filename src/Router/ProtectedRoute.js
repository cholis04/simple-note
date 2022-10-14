import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/masuk" />;
};

export default ProtectedRoute;
