/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const stack = new Array(people.length)
  people.sort((a, b) => (b[0] === a[0] ? b[1] - a[1] : a[0] - b[0]));
  for (let j = 0; j < people.length; j ++) {
    let index = -1
    for (let i = 0; i < stack.length; i++) {
      if (!stack[i]) {
        index += 1
      }
      if (index === people[j][1]) {
        stack[i] = people[j]
        break
      }
    }
  }
  return stack
};

module.exports = reconstructQueue