import { Routes, Route } from 'react-router-dom';

import NotesContextProvider from './context/NotesContext';

import NotFound from './blocks/NotFound';

import Archive from './pages/Archive';
import Home from './pages/Home';
import Note from './pages/Note';

function App() {
  return (
    <NotesContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arsip" element={<Archive />} />
        <Route path="/catatan/:id" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NotesContextProvider>
  );
}

export default App;
