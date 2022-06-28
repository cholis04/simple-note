import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';
import { NotesContext } from '../../context/NotesContext';
import { PanelContext } from '../../context/PanelContext';

import BoxNoteCard from '../BoxNoteCard';
import Empty from '../Empty';

function TabPanel({ panelId, panelName, panelLabel, notes }) {
  const { panel } = useContext(PanelContext);
  const { openModal } = useContext(ModalContext);
  const { moveNote, deleteNote } = useContext(NotesContext);

  return (
    <div
      id={panelId}
      role="tabpanel"
      tabIndex="0"
      aria-labelledby={panelLabel}
      hidden={panel !== panelName}
    >
      {notes.length >= 1 ? (
        <BoxNoteCard
          notes={notes}
          moveNote={moveNote}
          deleteNote={deleteNote}
        />
      ) : (
        <Empty openModal={openModal} />
      )}
    </div>
  );
}

export default TabPanel;
