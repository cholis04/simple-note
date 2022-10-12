import { useContext, useEffect } from 'react';

import { LanguageContext } from '../context/LanguageContext';

import styles from '../styles/pages/Login.module.css';

import { locale } from '../locale/Login.locale';

function Login() {
  const { lang } = useContext(LanguageContext);

  // Title Document
  useEffect(() => {
    document.title = locale[lang].pageTitle;
  }, [lang]);

  return <div>Login</div>;
}

export default Login;
