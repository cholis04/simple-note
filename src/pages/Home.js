import { useEffect, useContext } from 'react';

import { NotesContext } from '../context/NotesContext';

import MemberLayout from '../layouts/MemberLayout';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';
import ActionFloat from '../components/ActionFloat';

import styles from '../styles/pages/Home.module.css';

import { locale } from '../locale/Home.locale';

function Home() {
  const lang = 'en';

  const { activeNotes } = useContext(NotesContext);

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
            {locale[lang].headingText} ({activeNotes.length})
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
          {activeNotes.length <= 0 && <EmptyList />}
          {activeNotes.length >= 1 && (
            <div className={styles.main__noteBox}>
              {activeNotes.map((note) => (
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

export default Home;
