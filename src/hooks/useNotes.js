import { useCallback, useContext, useEffect, useState } from 'react';

import { NotesContext } from '../context/NotesContext';

import { getActiveNotes, getArchivedNotes } from '../fetcher/noteFetcher';

import { sliceBodyNote } from '../utils/sliceBodyNote';

const useNotes = (type) => {
  const { stale, filteredActiveNotes, filteredArchiveNotes, dispatch } =
    useContext(NotesContext);

  const [loading, setLoading] = useState(() =>
    type === 'active' ? stale.active : stale.archive,
  );
  const [error, setError] = useState(false);

  const data = type === 'active' ? filteredActiveNotes : filteredArchiveNotes;
  const fetcher = type === 'active' ? getActiveNotes : getArchivedNotes;

  // Fetch Note
  const getNotes = useCallback(async () => {
    const resJson = await fetcher();

    if (resJson.error) {
      setLoading(false);
      setError(true);
    } else {
      if (type === 'active') {
        dispatch({
          type: 'UPDATE_ACTIVE_NOTES',
          payload: sliceBodyNote(resJson.data).reverse(),
        });
      }

      if (type === 'archive') {
        dispatch({
          type: 'UPDATE_ARCHIVE_NOTES',
          payload: sliceBodyNote(resJson.data).reverse(),
        });
      }
      setLoading(false);
    }
  }, [dispatch, fetcher, type]);

  useEffect(() => {
    if (loading) {
      getNotes();
    }
  }, [loading, getNotes]);

  return {
    data,
    loading,
    error,
  };
};

export default useNotes;
