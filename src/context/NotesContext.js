import { createContext, useEffect, useState } from 'react';

import { getInitialData } from '../data';

export const NotesContext = createContext();

const LocalStorageName = 'simple-notes-XS89DF28SSD093SD';

const initialState = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? JSON.parse(localData) : getInitialData;
};

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState(initialState());

  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  // Add Note
  const addNote = (newTitle, newBodyText) => {
    setNotes([
      {
        id: new Date().getTime(),
        title: newTitle.trim(),
        body: newBodyText.trim(),
        createdAt: new Date().toJSON(),
        archived: false,
      },
      ...notes,
    ]);
  };

  // Delete note by Id
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
      value={{ activeNotes, archiveNotes, addNote, moveNote, deleteNote }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
