import styles from './MarkText.module.css';

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
              <mark className={styles.mark} key={index}>
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
