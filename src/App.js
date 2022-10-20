import Router from './router/Router';

import NotesContextProvider from './context/NotesContext';
import ModeContextProvider from './context/ModeContext';
import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

import ScrollToTop from './elements/ScrollToTop';

function App() {
  return (
    <LanguageContextProvider>
      <ModeContextProvider>
        <NotesContextProvider>
          <AuthContextProvider>
            <ScrollToTop>
              <Router />
            </ScrollToTop>
          </AuthContextProvider>
        </NotesContextProvider>
      </ModeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
