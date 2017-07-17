exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function a(start, end) {
  	
  			
  	console.log(start);
  	start=start+1;

  	if(start>end) {return;}
  	setTimeout(a,100,start,end);
 	   
	return {
	 		 cancel : function () {
	         	console.log=function(){};
	   		 }
		  }

	}
  	
  	
};
