import { createContext, useEffect, useState } from 'react';

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
  const [keyword, setKeyword] = useState('');

  const filteredNotes =
    keyword !== ''
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase()),
        )
      : notes;

  const activeNotes = filteredNotes.filter((note) => note.archived === false);
  const archiveNotes = filteredNotes.filter((note) => note.archived === true);

  const totalNotes = notes.length;
  const availableNotes = totalNotes < MaxNotes;

  // Add Note
  const addNote = (newTitle, newBodyText) => {
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
  };

  // Delete Note by Id
  const deleteNote = (id) => {
    if (window.confirm('Hapus catatan ?')) {
      const deletedNotes = notes.filter((note) => note.id !== id);
      setNotes(deletedNotes);
    }
  };

  // Move Note Archived False or True by ID
  const moveNote = (id) => {
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
  };

  // Sync with Local Storage
  useEffect(() => {
    localStorage.setItem(LocalStorageName, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        keyword,
        setKeyword,
        activeNotes,
        archiveNotes,
        availableNotes,
        addNote,
        moveNote,
        deleteNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
