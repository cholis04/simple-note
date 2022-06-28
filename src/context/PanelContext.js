import { createContext, useState } from 'react';

export const PanelContext = createContext();

const PanelContextProvider = (props) => {
  const [panel, setPanel] = useState('active');

  return (
    <PanelContext.Provider value={{ panel, setPanel }}>
      {props.children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
