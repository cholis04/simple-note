import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Loading from '../blocks/Loading';

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Navigate to="/" replace={true} /> : <Outlet />;
};

export default PublicRoute;
