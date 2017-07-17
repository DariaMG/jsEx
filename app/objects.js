exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	obj.sayIt = fn;
  	return obj.sayIt();
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;

  },

  iterate: function(obj) {
  	prop=[];
  	for (var property in obj) {
    	if (obj.hasOwnProperty(property)) {
        	prop.push(property.toString()+": "+obj[property]);
        	
    	}
	}
	return prop;
  }
};