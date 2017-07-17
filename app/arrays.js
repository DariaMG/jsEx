exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i=0;i<arr.length;i++){
      if(arr[i]==item) return i;
    }
    return -1;
  },

  sum: function(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
      sum=sum+arr[i];
    }
      return sum;
  },

  remove: function(arr, item) {
    let i=0;
    while(i<arr.length){
    
      if(arr[i]==item) arr.splice(i, 1);
        else i=i+1;
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    let i=0;
    while(i<arr.length){
    
      if(arr[i]==item) arr.splice(i, 1);
        else i=i+1;
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.splice(0,0,item);
      return arr;
  },

  curtail: function(arr) {
      arr.splice(0,1);
      return arr;
  },

  concat: function(arr1, arr2) {
      var arr3=arr1.concat(arr2);
      return arr3;
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
      var count=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]===item) count=count+1;
      }
      return count;
  },

  duplicates: function(arr) {
    var arr1=[];
    arr.sort(function(a, b){return a - b});
    for(let i=1;i<arr.length;i++){
      if(arr[i]==arr[i-1]&&arr[i]!=arr1[arr1.length-1]) arr1.push(arr[i]);
    }
    return arr1;
  },

  square: function(arr) {
      for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
      }
      return arr;
  },

  findAllOccurrences: function(arr, target) {
      var arr1=[];
      for(let i=0;i<arr.length;i++){
        if(arr[i]==target) arr1.push(i);
      }
      return arr1;
  }
};
