import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getInitialData } from '../data';

export const NotesContext = createContext();

export const MaxNotes = 30;
const LocalStorageName = 'simple-notes-XS89DF28SSD093SD';

const initialState = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? JSON.parse(localData) : getInitialData;
};

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState(initialState());
  const [searchParams, setSearchParams] = useSearchParams();
  // const [keyword, setKeyword] = useState('');

  // Query Params
  const keywordTitle = searchParams.get('judul') || '';

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

  const filteredNotes =
    keywordTitle !== null
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(keywordTitle.toLowerCase()),
        )
      : notes;

  const activeNotes = filteredNotes.filter((note) => note.archived === false);
  const archiveNotes = filteredNotes.filter((note) => note.archived === true);

  const totalNotes = notes.length;
  const availableNotes = totalNotes < MaxNotes;

  // Find Note by Id
  const getNoteById = useCallback(
    (id) => {
      return notes.find((note) => note.id === id);
    },
    [notes],
  );

  // Add Note
  const addNote = useCallback(
    (newTitle, newBodyText) => {
      if (availableNotes) {
        const date = new Date();

        setNotes([
          {
            id: date.getTime(),
            title: newTitle.trim(),
            body: newBodyText.trim(),
            createdAt: date.toJSON(),
            archived: false,
          },
          ...notes,
        ]);
      }
    },
    [availableNotes, notes],
  );

  // Delete Note by Id
  const deleteNote = useCallback(
    (id) => {
      const deletedNotes = notes.filter((note) => note.id !== id);
      setNotes(deletedNotes);
    },
    [notes],
  );

  // Move Note Archived False or True by ID
  const moveNote = useCallback(
    (id) => {
      const filteredNotes = notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived,
          };
        }

        return note;
      });
      setNotes(filteredNotes);
    },
    [notes],
  );

  // Context Value
  const contextValue = useMemo(() => {
    return {
      keywordTitle,
      setKeywordTitle,
      getNoteById,
      activeNotes,
      archiveNotes,
      availableNotes,
      addNote,
      moveNote,
      deleteNote,
    };
  }, [
    keywordTitle,
    setKeywordTitle,
    getNoteById,
    activeNotes,
    archiveNotes,
    availableNotes,
    addNote,
    moveNote,
    deleteNote,
  ]);

  // Sync with Local Storage
  useEffect(() => {
    localStorage.setItem(LocalStorageName, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
