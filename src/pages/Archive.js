import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import MemberLayout from '../layouts/MemberLayout';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';

import ButtonIcon from '../elements/ButtonIcon';

import styles from '../styles/pages/Archive.module.css';

function Archive() {
  const navigate = useNavigate();
  const location = useLocation();

  const { archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = 'Daftar Arsip';
  }, []);

  // Navigate Rounte on Button Click
  const onAddButtonClick = () => {
    navigate('/catatan/baru', {
      state: {
        from: location.pathname,
      },
    });
  };

  // Render Component
  return (
    <MemberLayout>
      {/* Main Heading */}
      <div className={styles.main__heading}>
        <div className={styles.main__headingWrapper}>
          <h1 className={styles.main__title}>
            Daftar Arsip ({archiveNotes.length})
          </h1>
          <SearchBar />
        </div>
      </div>

      {/* Note List */}
      <section
        className={styles.main__notelist}
        id="daftar-arsip"
        aria-label="Daftar Arsip"
      >
        <div className={styles.main__notelistWrapper}>
          {archiveNotes.length <= 0 && <EmptyList />}
          {archiveNotes.length >= 1 && (
            <div className={styles.main__noteBox}>
              {archiveNotes.map((note) => (
                <CardNote key={note.id} note={note} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Float Button on Mobile Screen */}
      <div className={styles.main__buttonFloat}>
        <ButtonIcon
          icon={<PlusIcon />}
          label="Buat catatan baru"
          onClick={onAddButtonClick}
        />
      </div>
    </MemberLayout>
  );
}

export default Archive;
