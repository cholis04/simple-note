import NotesContextProvider from './context/NotesContext';
import ModeContextProvider from './context/ModeContext';

import Router from './Router';

import ScrollToTop from './elements/ScrollToTop';

function App() {
  return (
    <ModeContextProvider>
      <NotesContextProvider>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </NotesContextProvider>
    </ModeContextProvider>
  );
}

export default App;
