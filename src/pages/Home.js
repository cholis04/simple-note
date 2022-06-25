import { useEffect, useState } from 'react';
import TabList from '../containers/TabList';

import EmptyInboxDesktop from '../assets/images/Empty_Inbox_Outline_Desktop.png';
import EmptyInboxMobile from '../assets/images/Empty_Inbox_Outline_Mobile.png';

function Home() {
  const [panel, setPanel] = useState('active');

  // Title Document
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  return (
    <>
      {/* Navbar */}
      <header>
        <div className="wrapper">
          <h1>Catatan Singkat</h1>
          <button>
            <span>[Icon]</span> Buat Catatan
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="wrapper">
          {/* Filter  */}
          <nav>
            <form role="search">
              <div className="input-group">
                <span>[Icon]</span>
                <input
                  name="cari-catatan"
                  type="search"
                  placeholder="Cari catatan... "
                  aria-label="Cari catatan"
                />
              </div>
            </form>

            <TabList panel={panel} setPanel={setPanel} />
          </nav>

          {/* Notes */}
          <section id="daftar-catatan" aria-label="Daftar Catatan">
            <div
              id="panel-aktif"
              role="tabpanel"
              tabIndex="0"
              aria-labelledby="tab-catatan-aktif"
              hidden={panel !== 'active'}
            >
              <div className="box-card">
                <article tabIndex="0">
                  <h2>Fusce ac ipsum</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Suspendisse sed ipsum nisi. Nullam venenatis id libero nec
                    pellentesque. Fusce elementum libero eget ante commodo, eu
                    ultricies neque sagittis. Nulla dignissim, arcu nec luctus
                    pulvinar, tortor risus convallis lacus, vitae convallis
                    tortor est quis risus.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>Proin sem massa</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Vestibulum fringilla dolor turpis, sed ornare urna ultricies
                    quis. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Cras cursus in
                    dui nec dignissim. Cras neque nunc, scelerisque vel lectus.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>SED</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Phasellus malesuada placerat turpis eu efficitur. Mauris
                    sodales ullamcorper.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>Class aptent taciti sociosqu</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Ut commodo, ligula viverra ultrices aliquam, mauris risus
                    tempus nisl, non pharetra odio ante et lacus. Duis nec
                    cursus massa. Etiam eget odio pretium, rhoncus lacus quis,
                    lacinia sem. Etiam laoreet bibendum blandit.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>Fusce ac ipsum</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Suspendisse sed ipsum nisi. Nullam venenatis id libero nec
                    pellentesque. Fusce elementum libero eget ante commodo, eu
                    ultricies neque sagittis. Nulla dignissim, arcu nec luctus
                    pulvinar, tortor risus convallis lacus, vitae convallis
                    tortor est quis risus.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>Aliquam ac vestibulum diam</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Nullam justo neque, molestie ac mi a, porttitor sagittis
                    nisi. Maecenas eget ex.
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>

                <article tabIndex="0">
                  <h2>Nulla tempor</h2>
                  <p className="date-info">
                    <span>[Icon]</span>{' '}
                    <time dateTime="2015-08-17 20:22">
                      Kamis, 14 April 2022
                    </time>
                  </p>
                  <hr />
                  <p>
                    Curabitur euismod erat eleifend, maximus augue at, dapibus
                    nisl. Curabitur accumsan interdum feugiat. Donec eget neque
                    suscipit, congue felis nec, facilisis massa. Fusce feugiat
                    fringilla diam pharetra fringilla. Sed at pretium lectus,
                    nec scelerisque
                  </p>
                  <hr />
                  <div className="action">
                    <button>Arsipkan →</button>

                    <button>
                      <span>[Icon] </span> Hapus
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div
              id="panel-arsip"
              role="tabpanel"
              tabIndex="0"
              aria-labelledby="tab-catatan-arsip"
              hidden={panel !== 'archive'}
            >
              <div className="box-empty">
                <picture>
                  <source
                    media="(min-width:768px)"
                    srcSet={EmptyInboxDesktop}
                  />
                  <img src={EmptyInboxMobile} alt="" />
                </picture>
                <p>
                  Catatan singkat tidak ditemukan,{' '}
                  <button>Buat sekarang!</button>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Dialog Form */}
      </main>
    </>
  );
}

export default Home;
