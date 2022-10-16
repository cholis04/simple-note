import { createContext, useState, useMemo, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [activeNotes, setActiveNotes] = useState([]);
  // const [archiveNotes, setArchiveNotes] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // Query Params
  const keywordTitle = searchParams.get('judul') || '';

  // Filter Data when keyword available
  const filteredActiveNotes =
    keywordTitle !== null
      ? activeNotes.filter((note) =>
          note.title.toLowerCase().includes(keywordTitle.toLowerCase()),
        )
      : activeNotes;

  // const filteredArchiveNotes =
  //   keywordTitle !== null
  //     ? archiveNotes.filter((note) =>
  //         note.title.toLowerCase().includes(keywordTitle.toLowerCase()),
  //       )
  //     : archiveNotes;

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
  // const getNoteById = useCallback(
  //   (id) => {
  //     return notes.find((note) => note.id === id);
  //   },
  //   [notes],
  // );

  // Add Note
  const addNote = useCallback(
    (newTitle, newBodyText) => {
      const date = new Date();

      setActiveNotes([
        {
          id: date.getTime(),
          title: newTitle.trim(),
          body: newBodyText.trim(),
          createdAt: date.toJSON(),
          archived: false,
        },
        ...activeNotes,
      ]);
    },
    [activeNotes],
  );

  // Move Note Archived False or True by ID
  const moveNote = useCallback(
    (id) => {
      const filteredNotes = activeNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived,
          };
        }

        return note;
      });
      setActiveNotes(filteredNotes);
    },
    [activeNotes],
  );

  // Delete Note by Id
  const deleteNote = useCallback(
    (id) => {
      const deletedNotes = activeNotes.filter((note) => note.id !== id);
      setActiveNotes(deletedNotes);
    },
    [activeNotes],
  );

  // Context Value
  const contextValue = useMemo(() => {
    return {
      keywordTitle,
      filteredActiveNotes,
      // filteredArchiveNotes,
      setKeywordTitle,
      addNote,
      moveNote,
      deleteNote,
    };
  }, [
    keywordTitle,
    filteredActiveNotes,
    // filteredArchiveNotes,
    setKeywordTitle,
    addNote,
    moveNote,
    deleteNote,
  ]);

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
