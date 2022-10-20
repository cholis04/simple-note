import { useRoutes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

import Archive from '../pages/Archive';
import Home from '../pages/Home';
import AddNote from '../pages/AddNote';
import Note from '../pages/Note';
import Login from '../pages/Login';
import Register from '../pages/Register';

import NotFound from '../components/NotFound';

export default function Router() {
  let element = useRoutes([
    // Private Route
    {
      element: <ProtectedRoute />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/arsip', element: <Archive /> },
        { path: '/catatan/baru', element: <AddNote /> },
        { path: '/catatan/:id', element: <Note /> },
      ],
    },

    // Public Route
    {
      element: <PublicRoute />,
      children: [
        { path: '/masuk', element: <Login /> },
        { path: '/daftar', element: <Register /> },
      ],
    },

    // Catch All route
    { path: '*', element: <NotFound /> },
  ]);
  return element;
}
