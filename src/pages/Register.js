import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useLang from '../hooks/useLang';
import useMode from '../hooks/useMode';

import FlashMessage from '../components/FlashMessage';

import InputText from '../elements/InputText';
import InputLabel from '../elements/InputLabel';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';
import ToggleMode from '../elements/ToggleMode';
import ToggleLanguage from '../elements/ToggleLanguage';

import {
  emailValidation,
  fullnameValidation,
  passwordValidation,
} from '../utils/validationSign';

import styles from '../styles/pages/Register.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

import { locale } from '../locale/Register.locale';

// Initial Form State
const initialFormState = {
  fullname: {
    value: '',
    maxChar: 50,
    invalid: null,
  },
  email: {
    value: '',
    maxChar: 120,
    invalid: null,
  },
  password: {
    value: '',
    maxChar: 60,
    invalid: null,
  },
  passwordConfirm: {
    value: '',
    maxChar: 60,
    invalid: null,
  },
};

function Register() {
  const [form, setForm] = useState(() => initialFormState);
  const [response, setResponse] = useState(null);
  const { lang } = useLang();
  const { mode } = useMode();

  const validForm =
    !form.fullname.invalid &&
    !form.email.invalid &&
    !form.password.invalid &&
    !form.passwordConfirm.invalid;
  const emptyForm =
    form.fullname.value === '' ||
    form.email.value === '' ||
    form.password.value === '' ||
    form.passwordConfirm.value === '';

  // Validation Form
  const validate = (field, value) => {
    switch (field) {
      case 'fullname':
        return fullnameValidation(value);
      case 'email':
        return emailValidation(value);
      case 'password':
        return passwordValidation(value);
      case 'passwordConfirm':
        return passwordValidation(value);
      default:
        break;
    }
  };

  // Controlled Form on Change
  const updateForm = (currentElement, currentValue) => {
    const maxChar = form[currentElement].maxChar;
    const sliceValue = currentValue.slice(0, maxChar);

    setForm((prevForm) => {
      return {
        ...prevForm,
        [currentElement]: {
          ...prevForm[currentElement],
          value: sliceValue.trimStart(),
          invalid: validate(currentElement, sliceValue),
        },
      };
    });
  };

  // Handle Input Text on Change
  const handleInputChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  // Add note when form is valid and not empty
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password does not match
    if (form.password.value !== form.passwordConfirm.value) {
      setResponse({
        type: 'error',
        message: 'noMatch',
      });
    } else {
      // Check Validation
      if (validForm && !emptyForm) {
        setResponse({
          type: 'success',
          message: 'registered',
        });

        // Reset Form
        setForm(initialFormState);
      }
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
            message={locale[lang].response[response.message]}
          />
        )}

        {/* Register Form */}
        <form className={styles.register__form} onSubmit={handleSubmit}>
          {/* Fullname Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel
                idfor="fullname"
                text={locale[lang].fullnameField.label}
              />
            </div>
            <InputText
              id="fullname"
              type="text"
              placeholder={locale[lang].fullnameField.placeholder}
              value={form.fullname.value}
              onChange={handleInputChange}
            />

            {form.fullname.invalid && (
              <InvalidMessage
                text={locale[lang].validation[form.fullname.invalid]}
              />
            )}
          </div>

          {/* Email Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel idfor="email" text={locale[lang].emailField.label} />
            </div>
            <InputText
              id="email"
              type="email"
              placeholder={locale[lang].emailField.placeholder}
              value={form.email.value}
              onChange={handleInputChange}
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
              id="password"
              type="password"
              placeholder={locale[lang].passwordField.placeholder}
              value={form.password.value}
              onChange={handleInputChange}
            />

            {form.password.invalid && (
              <InvalidMessage
                text={locale[lang].validation[form.password.invalid]}
              />
            )}
          </div>

          {/* Confirm Password Input Group */}
          <div className={`${styles.input__group} ${styles.text__group}`}>
            <div className={styles.input__header}>
              <InputLabel
                idfor="confimrPassword"
                text={locale[lang].passwordConfirmField.label}
              />
            </div>
            <InputText
              id="passwordConfirm"
              type="password"
              placeholder={locale[lang].passwordConfirmField.placeholder}
              value={form.passwordConfirm.value}
              onChange={handleInputChange}
            />

            {form.passwordConfirm.invalid && (
              <InvalidMessage
                text={locale[lang].validation[form.passwordConfirm.invalid]}
              />
            )}
          </div>

          {/* Submit button */}
          <div className={styles.submitButton}>
            <ButtonLabel
              label={locale[lang].buttonRegister}
              fullWidth={true}
              disabled={!validForm || emptyForm}
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
