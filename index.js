// To study: UI tests, REACT tests with JEST, how to use Redux!!!
// check the Filho da Nuven video of REACT code interview

//current exercise
function debounce(invokedFunction, milliseconds) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      invokedFunction.apply(context, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, milliseconds);
	
    if (!timeout) invokedFunction.apply(context, args);
  };
};

module.exports = debounce;

let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // only this call should invoke a()