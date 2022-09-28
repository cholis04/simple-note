import { countWords } from './countWord';

export const titleValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'Judul tidak boleh kosong!';
  }

  // Only Word (Letters, numbers, space)
  const pattern = /^[A-Za-z0-9 -]*$/;
  if (pattern.test(value) === false) {
    return 'Judul hanya boleh Huruf dan Angka';
  }

  return null;
};

export const bodyTextValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'Isi Catatan tidak boleh kosong!';
  }
  // Minimum 1 Word
  const words = countWords(value);
  if (words <= 1) {
    return 'Minimal 1 Kata berupa Huruf/Angka';
  }

  return null;
};
