import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useLang from '../hooks/useLang';
import useMode from '../hooks/useMode';
import useForm from '../hooks/useForm';

import { login } from '../fetcher/userFetcher';
import { putAccessToken } from '../fetcher/settings';

import FlashMessage from '../components/FlashMessage';

import InputText from '../elements/InputText';
import InputLabel from '../elements/InputLabel';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';
import ToggleMode from '../elements/ToggleMode';
import ToggleLanguage from '../elements/ToggleLanguage';

import styles from '../styles/pages/Login.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

import { formLogin } from '../data/formLogin';

import { locale } from '../locale/Login.locale';

function Login() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const { form, emptyForm, validForm, handleFormChange } = useForm(formLogin);
  const { lang } = useLang();
  const { mode } = useMode();

  //  Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check Validation
    if (validForm && !emptyForm) {
      const resJson = await login({
        email: form.email.value,
        password: form.password.value,
      });

      if (resJson.error) {
        setResponse({
          type: 'error',
          message: resJson.data,
        });
      } else {
        putAccessToken(resJson.data.accessToken);
      }

      setLoading(false);
    }
  };

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

        {/* Flash Message */}
        {response && (
          <FlashMessage
            type={response.type}
            message={
              locale[lang].response[response.message.replaceAll(' ', '')] ||
              response.message
            }
          />
        )}

        {/* Register Form */}
        <form className={styles.login__form} onSubmit={handleSubmit}>
          {/* Email Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="email" text={locale[lang].emailField.label} />
            </div>
            <InputText
              id="email" // object keys
              type="email"
              placeholder={locale[lang].emailField.placeholder}
              value={form.email.value}
              onChange={handleFormChange}
            />

            {form.email.invalid && (
              <InvalidMessage
                text={locale[lang].validation[form.email.invalid]}
              />
            )}
          </div>

          {/* Password Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel
                idfor="password"
                text={locale[lang].passwordField.label}
              />
            </div>
            <InputText
              id="password" // object keys
              type="password"
              placeholder={locale[lang].passwordField.placeholder}
              value={form.password.value}
              onChange={handleFormChange}
            />

            {form.password.invalid && (
              <InvalidMessage
                text={locale[lang].validation[form.password.invalid]}
              />
            )}
          </div>

          {/* Submit button */}
          <div className={styles.submitButton}>
            <ButtonLabel
              label={loading ? locale[lang].loading : locale[lang].buttonLogin}
              fullWidth={true}
              disabled={!validForm || emptyForm || loading}
            />
          </div>
        </form>

        {/* Register Link */}
        <p className={styles.main__registerLink}>
          {locale[lang].linkText}{' '}
          <Link to="/daftar" className={styles.link}>
            {locale[lang].links.register}
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

export default Login;
