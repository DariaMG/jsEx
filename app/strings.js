exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str1, amount) {
  	var i=1;
  	var str=[];
  	str=str1.split("");
  	while(i<str.length){
  		var nr=1;
  		while(str[i]==str[i-1]){
  			nr=nr+1;
  			if(nr>amount) str.splice(i, 1);
  			else{
  				i=i+1; 
  			}
  			
  		}
  		i=i+1; 
  	}
  	return str.join("");
  },






wordWrap: function(str, cols) {
  	  var ss=[];
  	  str1="";
	  var arr=[];
	  arr=str.split(" ");

	  	
        
	  	var sum=arr[0].length;
        str1=str1+arr[0];
	  	for(i=1;i<arr.length-1;i++){
        	
	  		if(sum>cols || ((sum+arr[i].length)>cols)) str1=str1+"\n"+arr[i];
            else{
            	str1=str1+" "+arr[i];
            }
            
	  		sum=sum+arr[i].length+1;
           
  		}
        if(sum>=cols) str1=str1+"\n"+arr[arr.length-1];
        else  str1=str1+" "+arr[arr.length-1];
        
  		str=str1;
  		
	

	

	
	return  str;
  },

  reverseString: function(str) {
  		return str.split("").reverse().join("");
  }
};
