import { useEffect, useContext } from 'react';

import { NotesContext } from '../context/NotesContext';

import MemberLayout from '../layouts/MemberLayout';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';
import ActionFloat from '../components/ActionFloat';

import styles from '../styles/pages/Archive.module.css';

import { locale } from '../locale/Archive.locale';

function Archive() {
  const lang = 'en';
  const { archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = locale[lang].pageTitle;
  }, []);

  // Render Component
  return (
    <MemberLayout>
      {/* Main Heading */}
      <div className={styles.main__heading}>
        <div className={styles.main__headingWrapper}>
          <h1 className={styles.main__title}>
            {locale[lang].headingText} ({archiveNotes.length})
          </h1>
          <SearchBar />
        </div>
      </div>

      {/* Note List */}
      <section
        className={styles.main__notelist}
        aria-label={locale[lang].headingText}
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
      <ActionFloat />
    </MemberLayout>
  );
}

export default Archive;
