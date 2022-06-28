import React, { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';
import { PanelContext } from '../../context/PanelContext';

import BoxNoteCard from '../BoxNoteCard';
import Empty from '../Empty';

function TabPanel({ panelId, panelName, panelLabel, notes }) {
  const { panel } = useContext(PanelContext);
  const { openModal } = useContext(ModalContext);

  return (
    <div
      id={panelId}
      role="tabpanel"
      tabIndex="0"
      aria-labelledby={panelLabel}
      hidden={panel !== panelName}
    >
      {notes.length >= 1 ? (
        <BoxNoteCard notes={notes} />
      ) : (
        <Empty openModal={openModal} />
      )}
    </div>
  );
}

export default React.memo(TabPanel);
