function MarkText({ text, keyword, regExpKeyword }) {
  if (keyword !== '') {
    const splitterText = '___{$#(!VMV!)#$}___';

    // Replacement with string
    const replace = text
      .toString()
      .replaceAll(regExpKeyword, `${splitterText}$&${splitterText}`);

    const split = replace.split(splitterText);

    return (
      <>
        {split.map((word, index) => {
          if (word.toLowerCase() === keyword.toLowerCase())
            return (
              <mark style={{ backgroundColor: 'yellow' }} key={index}>
                {word}
              </mark>
            );
          return word;
        })}
      </>
    );
  }

  return <>{text}</>;
}

export default MarkText;
