import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Loading from '../blocks/Loading';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to="/masuk" replace={true} />;
};

export default ProtectedRoute;
