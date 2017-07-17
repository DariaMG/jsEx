exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[1-9]/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1+/i.test(str);
  },

  endsWithVowel: function(str) {
    return /([aeiou])$/i.test(str);
  },

  captureThreeNumbers: function(str) {
   
   
    if((/([0-9]){3}/.exec(str))!=null) return (/([0-9]){3}/.exec(str)[0]);
    return false;
    
  },

  matchesPattern: function(str) {
      return /^(([0-9]){3}([-]){1}([0-9]){3}([-]){1}([0-9]){4})$/.test(str)
  },

  isUSD: function(str) {
       //console.log(/^([$](([0-9]+)[.])*(([0-9]+)[,])*)$/.exec(str))
    return /^\${1}([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{2})?)$/.test(str);
  }
};
