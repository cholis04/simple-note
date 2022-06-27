import BoxNoteCard from '../BoxNoteCard';
import Empty from '../Empty';

function TabPanel({
  panel,
  panelId,
  panelName,
  panelLabel,
  notes,
  moveNote,
  deleteNote,
  openModal,
}) {
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
