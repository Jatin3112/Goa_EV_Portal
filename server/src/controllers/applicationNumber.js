const generateApplicationNumber = (() => {
    let previousNumber = 0;
    const currentYear = new Date().getFullYear();
    const currentYearShort = String(currentYear).slice(-2);
    const nextYearShort = String(currentYear + 1).slice(-2);
    const yearRange = `${currentYearShort}-${nextYearShort}`;
  
    return () => {
      const prefix = `GOA/EV/${yearRange}/`;
      ++previousNumber; // Increment the previous number
      const formattedNumber = String(previousNumber).padStart(8, '0'); // Pad the number with leading zeros
      const applicationNumber = `${prefix}${formattedNumber}`;
      return applicationNumber;
   };
  })();


  module.exports = {generateApplicationNumber}