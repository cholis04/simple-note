// Initial Form State
// rules : ('required','pattern','minLength','minWord');
//
//  objkeys: {
//     value: string,
//     maxChar: number,
//     rules: [
//           {
//              name: string,
//              payload?: any,
//              message: string
//          },
//     ],
//     invalid: null | string,
//   },
//
// Notice Rules Order values !!

export const formRegister = {
  fullname: {
    value: '',
    maxChar: 50,
    rules: [
      { name: 'required', message: 'required' },
      { name: 'pattern', payload: /^[A-Za-z0-9 -]*$/, message: 'onlyWord' },
      { name: 'minLength', payload: 3, message: 'minThreeChar' },
    ],
    invalid: null,
  },
  email: {
    value: '',
    maxChar: 120,
    rules: [
      { name: 'required', message: 'required' },
      {
        name: 'pattern',
        payload: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: 'email',
      },
    ],
    invalid: null,
  },
  password: {
    value: '',
    maxChar: 60,
    rules: [
      { name: 'required', message: 'required' },
      { name: 'minLength', payload: 12, message: 'minTwelveChar' },
    ],
    invalid: null,
  },
  passwordConfirm: {
    value: '',
    maxChar: 60,
    rules: [
      { name: 'required', message: 'required' },
      { name: 'minLength', payload: 12, message: 'minTwelveChar' },
    ],
    invalid: null,
  },
};
