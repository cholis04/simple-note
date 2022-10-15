import { useState } from 'react';

import { required, pattern, minLength, minWord } from '../utils/validation';

const useForm = (initialValue) => {
  const [form, setForm] = useState(() => initialValue);

  const fields = Object.keys(form);

  const validForm = fields.every((field) => form[field].invalid === null);
  const emptyForm = fields.some((field) => form[field].value === '');

  const resloveRules = (name, value, payload, message) => {
    switch (name) {
      case 'required':
        return required(value, message);
      case 'pattern':
        return pattern(value, payload, message);
      case 'minLength':
        return minLength(value, payload, message);
      case 'minWord':
        return minWord(value, payload, message);
      default:
        break;
    }
  };

  // Validation Form
  const validate = (field, value) => {
    const rules = form[field].rules;
    let invalid = null;

    if (rules.length >= 1) {
      for (let i = 0; i < rules.length; i++) {
        if (invalid !== null) break;
        invalid = resloveRules(
          rules[i].name,
          value,
          rules[i].payload,
          rules[i].message,
        );
      }
    }

    return invalid;
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
  const handleFormChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  // Reset Form
  const resetForm = () => {
    setForm(initialValue);
  };

  return { form, validForm, emptyForm, handleFormChange, resetForm };
};

export default useForm;
