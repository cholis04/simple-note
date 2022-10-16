import { useEffect, useState } from 'react';

import { getActiveNotes } from '../fetcher/noteFetcher';

const useActiveNotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNotes = async () => {
    const resJson = await getActiveNotes();

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

export default useActiveNotes;
