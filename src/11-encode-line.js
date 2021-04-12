/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let groupLetter;
  let groupCount = 0;
  for (let i = 0; i <= str.length; i++) {
    const letter = str[i];
    if (groupLetter === letter) {
      groupCount += 1;
    } else {
      if (groupCount > 0) {
        if (groupCount > 1) {
          result += groupCount;
        }
        result += groupLetter;
      }
      groupCount = 1;
      groupLetter = letter;
    }
  }

  return result;
}

module.exports = encodeLine;
