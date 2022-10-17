import { useCallback, useContext, useEffect, useState } from 'react';

import { NotesContext } from '../context/NotesContext';

import { getActiveNotes, getArchivedNotes } from '../fetcher/noteFetcher';

const useNotes = (type) => {
  const { stale, filteredActiveNotes, filteredArchiveNotes, dispatch } =
    useContext(NotesContext);

  const [loading, setLoading] = useState(() =>
    type === 'active' ? stale.active : stale.archive,
  );
  const [error, setError] = useState(false);

  const data = type === 'active' ? filteredActiveNotes : filteredArchiveNotes;

  // Get Active Notes
  const getActive = useCallback(async () => {
    const resJson = await getActiveNotes();
    if (resJson.error) {
      setLoading(false);
      setError(true);
    } else {
      setLoading(false);
      dispatch({
        type: 'UPDATE_ACTIVE_NOTES',
        payload: resJson.data,
      });
    }
  }, [dispatch]);

  // Get Archive Notes
  const getArchive = useCallback(async () => {
    const resJson = await getArchivedNotes();

    if (resJson.error) {
      setLoading(false);
      setError(true);
    } else {
      setLoading(false);
      dispatch({
        type: 'UPDATE_ARCHIVE_NOTES',
        payload: resJson.data,
      });
    }
  }, [dispatch]);

  // Fetch Note
  const fetchNote = useCallback(() => {
    if (type === 'active') {
      getActive();
    }

    if (type === 'archive') {
      getArchive();
    }
  }, [type, getArchive, getActive]);

  useEffect(() => {
    if (loading) {
      fetchNote();
    }
  }, [loading, fetchNote]);

  return {
    data,
    loading,
    error,
  };
};

export default useNotes;
