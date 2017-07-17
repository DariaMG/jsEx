exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0],arr[1]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(strr){
      return str+ ", "+strr;
    }
    
    
    
  },


  makeClosures: function(arr, fn) {
      var arrF=[];
      for(let i=0;i<arr.length;i++){
          arrF.push(
             function(){
                return fn(arr[i]);
              }

            )
      }
      return arrF;  
  },

  partial: function(fn, str1, str2) {
    var s=fn(str1,str2,"");
    s=s.slice(0,s.length-1);
      return function(strr){
        return s+strr;
      }
  },

  useArguments: function() {
    var sum=0;
    for (var i = 0; i < arguments.length; i++) {
      sum=sum+arguments[i];
    }
    return sum;
  },



  callIt: function(fn) {
    var args = Array.prototype.splice.call(arguments, 1);
    fn(...args);
    
  },




  partialUsingArguments: function(fn) {
    
    var args = Array.prototype.splice.call(arguments, 1);
   
    return function(){
        var args1 = Array.prototype.splice.call(arguments, 0);
        var args2 = args.concat(args1);
       
        return fn(args2[0],args2[1],args2[2]);
    }
  },

  curryIt: function(fn) {
   
    return function a(argumentsA){
      return function b(argumentsB){
        return function c(argumentsC){
          return fn(argumentsA,argumentsB,argumentsC);
        }
      }
    }
  }
};
