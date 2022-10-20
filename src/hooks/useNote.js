import { useCallback, useContext, useEffect, useState } from 'react';

import { NotesContext } from '../context/NotesContext';

import { getNote } from '../fetcher/noteFetcher';

const useNote = (id) => {
  const { getNoteById, dispatch } = useContext(NotesContext);
  const note = getNoteById(id);

  const [loading, setLoading] = useState(() => note === undefined);
  const [error, setError] = useState(false);

  // Fetching Note
  const fetchNote = useCallback(async () => {
    const resJson = await getNote(id);

    if (resJson.error) {
      setError(true);
    } else {
      dispatch({
        type: 'FETCH_NOTE',
        payload: resJson.data,
      });
    }

    setLoading(false);
  }, [id, dispatch]);

  useEffect(() => {
    if (note === undefined) {
      fetchNote();
    }
  }, [note, fetchNote]);

  return {
    note,
    loading,
    error,
  };
};

export default useNote;
