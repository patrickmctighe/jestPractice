function anArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array');
    }
  
    if (arr.length === 0) {
      throw new Error('Array should not be empty');
    }
  
    const length = arr.length;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average,
      min,
      max,
      length
    };
  }

  module.exports = anArray