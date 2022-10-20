import { createContext, useMemo, useCallback, useReducer } from 'react';

import { useSearchParams } from 'react-router-dom';

import { initialState, NotesReducer } from '../reducer/NoteReducer';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, dispatch] = useReducer(NotesReducer, initialState);

  const [searchParams, setSearchParams] = useSearchParams();

  // Query Params
  const keywordTitle = searchParams.get('judul') || '';

  // Declare Notes
  const allNotes = notes.all.data;
  const activeNotes = notes.active.data;
  const archiveNotes = notes.archive.data;

  // Stale Data
  const stale = useMemo(() => {
    return {
      active: notes.active.stale,
      archive: notes.archive.stale,
    };
  }, [notes.active.stale, notes.archive.stale]);

  // Filter Data when keyword available
  const filteredActiveNotes =
    keywordTitle !== null
      ? activeNotes.filter((note) =>
          note.title.toLowerCase().includes(keywordTitle.toLowerCase()),
        )
      : activeNotes;

  const filteredArchiveNotes =
    keywordTitle !== null
      ? archiveNotes.filter((note) =>
          note.title.toLowerCase().includes(keywordTitle.toLowerCase()),
        )
      : archiveNotes;

  // Set Params
  const setKeywordTitle = useCallback(
    (newValue) => {
      setSearchParams({ judul: newValue });

      if (newValue === '') {
        searchParams.delete('judul');
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  // Find Note by Id
  const getNoteById = useCallback(
    (id) => {
      return allNotes.find((note) => note.id === id);
    },
    [allNotes],
  );

  // Context Value
  const contextValue = useMemo(() => {
    return {
      keywordTitle,
      filteredActiveNotes,
      filteredArchiveNotes,
      stale,
      getNoteById,
      setKeywordTitle,
      dispatch,
    };
  }, [
    keywordTitle,
    filteredActiveNotes,
    filteredArchiveNotes,
    stale,
    getNoteById,
    setKeywordTitle,
    dispatch,
  ]);

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
