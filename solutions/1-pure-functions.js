function prosoi(chisl) {
  if (chisl <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(chisl); i++) {
    if (chisl % i === 0) {
      return false;
    }
  }
  return true;
}

function sayPrimeOrNot(chisl) {
  if (prosoi(chisl)) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

export default sayPrimeOrNot;