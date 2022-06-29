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

  return null;
};
