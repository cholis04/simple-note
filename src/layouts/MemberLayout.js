import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Sidenav from '../blocks/Sidenav';

const MemberLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleSidenav = () => {
    setToggleMenu((prev) => !prev);
  };

  // Sync with Resize width
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Listen Event Resize
    window.addEventListener('resize', updateWidth);

    // Clean up function
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <>
      <Header toggleSidenav={toggleSidenav} />
      <main>{children}</main>
      {toggleMenu && screenWidth < 1024 && (
        <Sidenav toggleSidenav={toggleSidenav} />
      )}
      <Footer />
    </>
  );
};

MemberLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MemberLayout;
