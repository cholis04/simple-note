import { useContext, useRef, useState } from 'react';

import { NotesContext } from '../../context/NotesContext';
import { PanelContext } from '../../context/PanelContext';

function TabList() {
  const { archiveNotes, activeNotes } = useContext(NotesContext);
  const { panel, setPanel } = useContext(PanelContext);

  const [tabFocus, setTabFocus] = useState(0);

  // Ref document
  const activeMenuTab = useRef(null);
  const archiveMenuTab = useRef(null);

  const tabs = [activeMenuTab, archiveMenuTab];

  // Amount of Data
  const amountOfData = {
    active: activeNotes.length,
    archive: archiveNotes.length,
  };

  // Tablist
  const handleKeyDown = (e) => {
    let tabNum = tabFocus;

    // Only right and left arrow
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabNum].current.tabIndex = '-1';

      // Move right
      if (e.keyCode === 39) {
        tabNum++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length - 1) {
          tabNum = 0;
        }
      }

      // Move left
      if (e.keyCode === 37) {
        // If we're at the start, move to the end
        tabNum--;
        if (tabFocus <= 0) {
          tabNum = tabs.length - 1;
        }
      }

      setTabFocus(tabNum);

      tabs[tabNum].current.tabIndex = '0';
      tabs[tabNum].current.focus();
    }
  };

  return (
    <div role="tablist" aria-label="Tab Menu Catatan" onKeyDown={handleKeyDown}>
      <button
        role="tab"
        aria-selected={panel === 'active'}
        aria-controls="panel-aktif"
        aria-label="Daftar Catatan aktif"
        id="tab-catatan-aktif"
        tabIndex="0"
        ref={activeMenuTab}
        onClick={() => setPanel('active')}
      >
        <span>[Icon]</span> Aktif ({amountOfData.active})
      </button>
      <button
        role="tab"
        aria-selected={panel === 'archive'}
        aria-controls="panel-arsip"
        aria-label="Daftar Catatan yang diarsip"
        id="tab-catatan-arsip"
        tabIndex="-1"
        ref={archiveMenuTab}
        onClick={() => setPanel('archive')}
      >
        <span>Icon</span> Arisp ({amountOfData.archive})
      </button>
    </div>
  );
}

export default TabList;
