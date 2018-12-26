function remove(str) {
  let prev = 0;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'b') {
      arr[i] = '';
      continue;
    } else if (arr[i] === 'c' && arr[prev] === 'a') {
      arr[i] = '';
      arr[prev] = '';
      while (arr[prev] === '') {
        prev--;
      }
    } else {
      prev = i;
    }
  }
  return arr.join('');
}

console.log(remove('aaabccc'));
console.log(remove('addcaa'));

// ababccc
// i     j
