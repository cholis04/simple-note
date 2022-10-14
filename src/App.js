import Router from './Router/';

import NotesContextProvider from './context/NotesContext';
import ModeContextProvider from './context/ModeContext';
import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

import ScrollToTop from './elements/ScrollToTop';

function App() {
  return (
    <LanguageContextProvider>
      <ModeContextProvider>
        <AuthContextProvider>
          <NotesContextProvider>
            <ScrollToTop>
              <Router />
            </ScrollToTop>
          </NotesContextProvider>
        </AuthContextProvider>
      </ModeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
