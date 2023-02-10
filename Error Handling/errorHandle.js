
// try catch
try{
    console.log(victor);
}
catch(error) {
    console.log("name is not defined\n" + error);
}

console.log('\n\n')


// custom errors
function add(a, b){
    try{
        if (a > 100 || b > 100) throw "enter a smaller number"
        if(typeof(a) === 'string' || typeof(b) === 'string') throw "I do not accept strings"
        return a+b;
    }
    catch(error){
        console.log(error);
    }
    finally{                                            // runs no matter what error you get
        return Number(a)+ Number(b);
    }
}

const sum = add('67', 12);
console.log(sum);

// important properties
// name	    Sets or returns an error name
// message	Sets or returns an error message (a string)

// EvalError	    An error has occurred in the eval() function
// RangeError	    A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	    A syntax error has occurred
// TypeError	    A type error has occurred
// URIError	        An error in encodeURI() has occurred