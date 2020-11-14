function checkForSpam (message) { 
  'use strict';
  // Write code under this line
  const isInSpam = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  return isInSpam;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true