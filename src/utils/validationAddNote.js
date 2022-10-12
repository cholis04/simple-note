import { countWords } from './countWord';

export const titleValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'required';
  }

  // Only Word (Letters, numbers, space)
  const pattern = /^[A-Za-z0-9 -]*$/;
  if (pattern.test(value) === false) {
    return 'onlyWord';
  }

  return null;
};

export const bodyTextValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'required';
  }
  // Minimum 1 Word
  const words = countWords(value);
  if (words <= 1) {
    return 'minOneWord';
  }

  return null;
};
