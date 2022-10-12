import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';

import InputText from '../elements/InputText';
import InputLabel from '../elements/InputLabel';
// import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';
import ToggleMode from '../elements/ToggleMode';
import ToggleLanguage from '../elements/ToggleLanguage';

import styles from '../styles/pages/Register.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

import { locale } from '../locale/Register.locale';

function Register() {
  const { mode } = useContext(ModeContext);
  const { lang } = useContext(LanguageContext);

  // Title Document
  useEffect(() => {
    document.title = locale[lang].pageTitle;
  }, [lang]);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* Banner */}
        <div className={styles.main__header}>
          <img src={mode === 'dark' ? LogoDark : LogoLight} alt="" />
          <h1 className={styles.main__headingText}>
            {locale[lang].headingText}
          </h1>
        </div>

        {/* Register Form */}
        <form className={styles.register__form}>
          {/* Fullname Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="fullname" text="Nama" />
            </div>
            <InputText
              id="fullname"
              type="text"
              placeholder="Nama lengkap"
              value=""
              onChange={() => {}}
            />

            {/* {form.title.error && (
                  <InvalidMessage
                    errorText={locale[lang].validation[form.title.error]}
                  />
                )} */}
          </div>

          {/* Email Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="email" text="Surel" />
            </div>
            <InputText
              id="email"
              type="text"
              placeholder="nama@surel.id"
              value=""
              onChange={() => {}}
            />

            {/* {form.title.error && (
                  <InvalidMessage
                    errorText={locale[lang].validation[form.title.error]}
                  />
                )} */}
          </div>

          {/* Password Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="password" text="Kata Sandi" />
            </div>
            <InputText
              id="password"
              type="password"
              placeholder="Kata sandi rahasia"
              value=""
              onChange={() => {}}
            />

            {/* {form.title.error && (
                  <InvalidMessage
                    errorText={locale[lang].validation[form.title.error]}
                  />
                )} */}
          </div>

          {/* Confirm Password Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="confimrPassword" text="Ulangi Kata Sandi" />
            </div>
            <InputText
              id="confirmPassword"
              type="password"
              placeholder="Kata sandi rahasia"
              value=""
              onChange={() => {}}
            />

            {/* {form.title.error && (
                  <InvalidMessage
                    errorText={locale[lang].validation[form.title.error]}
                  />
                )} */}
          </div>

          <div className={styles.submitButton}>
            <ButtonLabel
              label="Daftar"
              fullWidth={true}
              // disabled={!validForm || emptyForm}
            />
          </div>
        </form>

        {/* Login Link */}
        <p className={styles.main__loginLink}>
          {locale[lang].linkText}{' '}
          <Link to="/masuk" className={styles.link}>
            {locale[lang].links.login}
          </Link>
        </p>

        {/* Personalization */}
        <div className={styles.main__personalization}>
          <ToggleMode />
          <ToggleLanguage />
        </div>
      </div>
    </main>
  );
}

export default Register;
