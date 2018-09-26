import PropTypes from 'prop-types';

export const replaceCount = (text, count) => {
  const words = ['0', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];

  return text.replace('${count}', words[count] ? words[count] : count); // eslint-disable-line no-template-curly-in-string
};

replaceCount.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default replaceCount;
