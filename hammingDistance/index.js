/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  if (x > y) {
    [x, y] = [y, x];
  }
  x = x.toString(2);
  y = y.toString(2);
  x = x.padStart(y.length, '0');

  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) count += 1;
  }
  return count;
};

module.exports = hammingDistance;