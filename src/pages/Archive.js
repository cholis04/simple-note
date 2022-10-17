import { useEffect } from 'react';

import useLang from '../hooks/useLang';
import useNotes from '../hooks/useNotes';

import MemberLayout from '../layouts/MemberLayout';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';
import ActionFloat from '../components/ActionFloat';

import styles from '../styles/pages/Archive.module.css';

import { locale } from '../locale/Archive.locale';

function Archive() {
  const { lang } = useLang();
  const { data, loading, error } = useNotes('archive');

  // Title Document
  useEffect(() => {
    document.title = locale[lang].pageTitle;
  }, [lang]);

  // Render Component
  return (
    <MemberLayout>
      {/* Main Heading */}
      <div className={styles.main__heading}>
        <div className={styles.main__headingWrapper}>
          <h1 className={styles.main__title}>
            {locale[lang].headingText} ({data.length})
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
          <div className={styles.main__notelistWrapper}>
            {loading && <p>Loading ...</p>}

            {!loading && error ? (
              <p>Error</p>
            ) : (
              <>
                {data.length <= 0 && <EmptyList />}
                {data.length >= 1 && (
                  <div className={styles.main__noteBox}>
                    {data.map((note) => (
                      <CardNote key={note.id} note={note} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Float Button on Mobile Screen */}
      <ActionFloat />
    </MemberLayout>
  );
}

export default Archive;
