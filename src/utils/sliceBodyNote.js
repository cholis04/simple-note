export const sliceBodyNote = (notes) => {
  return notes.map((note) => {
    return {
      ...note,
      body: note.body.slice(0, 120),
    };
  });
};
