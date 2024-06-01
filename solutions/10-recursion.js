const sequenceSum = (nach, con) => {
  // BEGIN
  if(nach>con) return NaN;
  if(nach===con) return nach;
  else ; 
  return nach + sequenceSum(nach + 1, con);
  // END
};

export default sequenceSum;
