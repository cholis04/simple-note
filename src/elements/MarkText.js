import PropTypes from 'prop-types';

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
              <mark className={styles.markText} key={index}>
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

MarkText.propTypes = {
  text: PropTypes.string,
  keyword: PropTypes.string,
  regExpKeyword: PropTypes.any.isRequired,
};

export default MarkText;
