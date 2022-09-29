import NotesContextProvider from './context/NotesContext';

import Router from './Router';

import ScrollToTop from './elements/ScrollToTop';

function App() {
  return (
    <NotesContextProvider>
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </NotesContextProvider>
  );
}

export default App;
