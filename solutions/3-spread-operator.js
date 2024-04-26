// BEGIN
const convert = (...arrays) => {
  if (arrays.length === 0) {
      return [];
  }

  const result = [];
  arrays.forEach(array => {
      let year = array[0];
      let month = array[1];
      let day = array[2];
      let dateString = new Date(year,month,day).toDateString();
      result.push(dateString);
  });

  return result;
}

export default convert;
// END