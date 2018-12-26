/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewelrys = S.match(new RegExp(`[${J}]`, 'g'));
  return jewelrys ? jewelrys.length : 0;
};

module.exports = numJewelsInStones;