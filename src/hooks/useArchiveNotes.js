import { useEffect, useState } from 'react';

import { getArchivedNotes } from '../fetcher/noteFetcher';

const useArchiveNotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNotes = async () => {
    const resJson = await getArchivedNotes();

    if (resJson.error) {
      setLoading(false);
      setError('error');
    } else {
      setLoading(false);
      setData(resJson.data);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useArchiveNotes;
