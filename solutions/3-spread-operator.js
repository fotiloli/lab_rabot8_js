// BEGIN
const convert = (...arays) => {
  if (arays.length === 0) {
      return [];
  }

  const result = [];
  arays.forEach(aray => {
      let god = aray[0];
      let mecyach = aray[1];
      let den = aray[2];
      let data = new Date(god,mecyach,den).toDateString();
      result.push(data);
  });

  return result;
}

export default convert;
// END