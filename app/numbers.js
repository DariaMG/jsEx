exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return ((num >>(bit-1) ) & 1);
  },

  base10: function(str) {
  	return parseInt(parseInt(str, 2).toString(10));
  },

  convertToBinary: function(num) {
  	return ("00000000"+num.toString(2)).slice(-8);
  	
  },

  multiply: function(a, b) {
    var commonMultiplier = 1000000;

    a *= commonMultiplier;
    b *= commonMultiplier;

    return (a * b) / (commonMultiplier * commonMultiplier);
  }
};
