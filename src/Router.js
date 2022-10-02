import { useRoutes } from 'react-router-dom';

import NotFound from './components/NotFound';

import Archive from './pages/Archive';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import Note from './pages/Note';

export default function Router() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'arsip', element: <Archive /> },
    { path: '/catatan/baru', element: <AddNote /> },
    { path: '/catatan/:id', element: <Note /> },
    { path: '*', element: <NotFound /> },
  ]);
  return element;
}
