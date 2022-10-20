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

export const formAddNote = {
  title: {
    value: '',
    maxChar: 50,
    rules: [
      { name: 'required', message: 'required' },
      { name: 'pattern', payload: /^[A-Za-z0-9 -]*$/, message: 'onlyWord' },
      { name: 'minLength', payload: 3, message: 'minThreeChar' },
    ],
    invalid: null,
  },
  bodyText: {
    value: '',
    maxChar: 1500,
    rules: [
      { name: 'required', message: 'required' },
      { name: 'minWord', payload: 1, message: 'minOneWord' },
    ],
    invalid: null,
  },
};
