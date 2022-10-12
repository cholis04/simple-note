import { useRoutes } from 'react-router-dom';

import NotFound from './components/NotFound';

import Archive from './pages/Archive';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import Note from './pages/Note';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Router() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'arsip', element: <Archive /> },
    { path: '/catatan/baru', element: <AddNote /> },
    { path: '/catatan/:id', element: <Note /> },
    { path: '/masuk', element: <Login /> },
    { path: '/daftar', element: <Register /> },
    { path: '*', element: <NotFound /> },
  ]);
  return element;
}
