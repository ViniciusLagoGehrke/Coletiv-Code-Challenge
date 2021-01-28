function debounce(invokedFunction, milliseconds, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) invokedFunction.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, milliseconds);
	
    if (callNow) invokedFunction.apply(context, args);
  };
};

let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // only this call should invoke a()