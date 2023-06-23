function ciph(str) {
    let obj = {};
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let beta = "bcdefghijklmnopqrstuvwxyza";
    
    for (let i = 0; i < alpha.length; i++) {
      obj[alpha[i]] = beta[i];
    }
    
    let encryptedStr = "";
    
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      
      if (obj.hasOwnProperty(currentChar)) {
        encryptedStr += obj[currentChar];
      } else {
        encryptedStr += currentChar;
      }
    }
    
    return encryptedStr;
  }

  module.exports = ciph;