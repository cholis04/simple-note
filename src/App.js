import NotesContextProvider from './context/NotesContext';
import ModeContextProvider from './context/ModeContext';

import Router from './Router';

import ScrollToTop from './elements/ScrollToTop';
import LanguageContextProvider from './context/LanguageContext';

function App() {
  return (
    <LanguageContextProvider>
      <ModeContextProvider>
        <NotesContextProvider>
          <ScrollToTop>
            <Router />
          </ScrollToTop>
        </NotesContextProvider>
      </ModeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
