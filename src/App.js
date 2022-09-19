import { Routes, Route } from 'react-router-dom';

import NotesContextProvider from './context/NotesContext';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <NotesContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NotesContextProvider>
  );
}

export default App;
