import { useContext } from 'react';

import { ModeContext } from '../context/ModeContext';

const useMode = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  return { mode, toggleMode };
};

export default useMode;
