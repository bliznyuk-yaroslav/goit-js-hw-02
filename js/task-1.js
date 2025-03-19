'use strict';
function digitize(n) {
  let num = 'xo';

  return n.split('').filter(char => num.includes(char));
}
console.log(digitize('xxooaaa'));
console.log(digitize('aaa'));
