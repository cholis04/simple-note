import { countWords } from './countWord';

export const required = (value, message) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return message;
  }

  return null;
};

export const pattern = (value, regex, message) => {
  // Only Email Pattern
  if (regex.test(value) === false) {
    return message;
  }

  return null;
};

export const minLength = (value, num, message) => {
  // Minimum 7 Char
  if (value.trimStart().length < num) {
    return message;
  }

  return null;
};

export const minWord = (value, num, message) => {
  // Minimum 1 Word
  if (countWords(value) <= num) {
    return message;
  }

  return null;
};
