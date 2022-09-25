import { Routes, Route } from 'react-router-dom';

import NotesContextProvider from './context/NotesContext';

import Archive from './pages/Archive';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <NotesContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arsip" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NotesContextProvider>
  );
}

export default App;
