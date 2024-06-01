const smallestDivisor = (num) => {
    // BEGIN
    function smallestDivisor(nam) {
      if (nam === 1) {
        return 1;
      }
    
      let monic = 2;

      while  (monic <= nam) {

        if (nam % monic === 0) {
          return monic;
        }
        monic++;
      }
    
      return nam;
    }
    
    // END
  };
  
export default smallestDivisor;
  