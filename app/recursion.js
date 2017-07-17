exports = typeof window === 'undefined' ? global : window;

var arr=[];
var paranteze=[];
exports.recursionAnswers = {

 p1:function a(data){
     for (var property in data) {
        if(property=='dir'){
           //console.log("^^^^^^  data.files.length=  "+data.files.length);
            for(var i=0;i<data.files.length;i++){
              if(typeof(data.files[i])=='string') {
                //console.log(data.files[i])
                arr.push(data.files[i]);
                //console.log("----- "+arr)
              }
              else{
                //console.log(data.files[i].files)
                //console.log("----- "+arr)
                arr.concat( a(data.files[i]));
              }
            }
           } 
          }
          //console.log("****"+arr);
          return arr;
        
  },

  p2:function b(data, dirName){
         for (var property in data) {
            if(data.dir==dirName){
              for(var i=0;i<data.files.length;i++){
                if(typeof(data.files[i])==='string') {
                  //console.log(data.files[i])
                  arr.push(data.files[i]);
                  //console.log("----- "+arr)
                }
                else{
                  //console.log(data.files[i].files)
                  //console.log("----- "+arr)
                  //return b(data.files[i])
                  return recursionAnswers.p1(data.files[i]);
                }
              }

            }
            else{
              for(var i=0;i<data.files.length;i++){
                if(typeof(data.files[i])==='object') {
                  return b(data.files[i],dirName);
                }
              }
            }
          }
        
    //console.log("****"+arr);
    return arr;

  },



  listFiles: function(data, dirName) {
    //console.log("========="+typeof(dirName));
    if(typeof(dirName)==='undefined'){
      arr=[];
      return recursionAnswers.p1(data)
    }
    else{
      arr=[];
       return recursionAnswers.p2(data,dirName)
    }
  },

 

  permute: function(arr) {

  	var permutation = function (arr, position){
            if(position == arr.length-1){ // >= was redundant and confusing
                results.push(arr);
            }else{
                for(var i=position;i<arr.length;i++){ // use local i
                    var tempSwap = arr[position];
                    arr.splice(position,1,arr[i]);
                    arr.splice(i,1,tempSwap);
                    permutation(arr.slice(),(position+1)); // you need a copy here
            }
            return;
        }
    };
    var results=[];
    permutation(arr,0);
    return results;
   
  },

  fibonacci: function(nn) {
  		
  		var f= function f(n){
  			if(n==1 || n==2) return 1;
  			return f(n-1)+f(n-2);
  		}
  		return f(nn);

  },
  back1:function aa(open,close,a){
     if(open==0 && close==0) {
      console.log("----------"+a.join(""));
      paranteze.push(a.join(""))
      //return paranteze;
    }
     if(open>close) {
      return;
    }
     if(open>0) {
        a.push('(');
        console.log("stanga "+a);
        aa(open-1,close,a);
        a.pop()
    }
     if(close>0){
        a.push(')');
        console.log("dreapta "+a);
        aa(open,close-1,a);
        a.pop();
    }
  },

  validParentheses: function(n) {
    var a=[];
    recursionAnswers.back1(n,n,a)
    console.log("||||final||||"+paranteze);
    return paranteze;
  }
};
