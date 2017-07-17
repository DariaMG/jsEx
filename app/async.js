exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  		return new Promise(function (resolve, reject) {
        	resolve(value);

    });

  },

 readTextFile:function(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
},

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve, reject) {


	/*

	    var json = $.getJSON(url);
	    
	    var data1=json.responseJSON;
	    console.log(typeof(json));
		var data = eval("" +json.responseText + "");

		

   		var arr = $.map(json, function(el) { return el });
  		console.log(json);
  		*/
  		arr=[];
  		fetch(url)  
		  .then(function(response) {  
		    return response.json();  
		  })  
		  .then(function(text) { 
		  	for(var i=0;i<text.people.length;i++){
		  		arr.push(text.people[i].name);
		  	} 
		  	arr.sort();
		    resolve(arr);
		  })  
		  .catch(function(error) {  
		    console.log('Request failed', error)  
		  });
		 
		  

  });
}
};
