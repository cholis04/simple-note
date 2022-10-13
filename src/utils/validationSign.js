export const fullnameValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'required';
  }

  // Only Word (Letters, numbers, space)
  const onlyWordPattern = /^[A-Za-z0-9 -]*$/;
  if (onlyWordPattern.test(value) === false) {
    return 'onlyWord';
  }

  // Minimum 3 Char
  if (value.trimStart().length < 3) {
    return 'minThreeChar';
  }

  return null;
};
export const emailValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'required';
  }

  // Only Email Pattern
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (emailPattern.test(value) === false) {
    return 'email';
  }

  return null;
};
export const passwordValidation = (value) => {
  // Not Null
  if (value.length === 0 || value === '') {
    return 'required';
  }

  // Minimum 7 Char
  if (value.trimStart().length < 12) {
    return 'minTwelveChar';
  }

  return null;
};
