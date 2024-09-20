//CLOSURE 
//1. Escriba el siguiente código ejemplo:
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
    console.log(name);
    }
    return displayName;
   }
   const myFunc = makeFunc();
   myFunc();
   
//4. Corregir y actualizar la grabación.
   function makeFuncc(name) {
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFuncc = makeFunc('JavaScript');
  myFunc(); // Muestra "JavaScript" en la consola


//c) ÁMBITO DE FUNCIÓN
 //1. Escriba el siguiente código ejemplo:
 function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
   }
   console.log(x); // Causes error


   //4. Escriba el siguiente código ejemplo:

const x = "declared outside function";
exampleFunction();
function exampleFunction() {
 console.log("Inside function");
 console.log(x);
}
console.log("Outside function");
console.log(x);

//7. Escriba el siguiente código ejemplo:
function f() {
    try {
    console.log(0);
    throw 'bogus';
    } catch (e) {
    console.log(1);
    return true; // this return statement is suspended
    // until finally block has completed
    console.log(2); // not reachable
    } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
   }
   console.log(f()); // 0, 1, 3, false



   //d) MANEJO DE EXCEPCIONES
//1. Escriba el siguiente código ejemplo:
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
function getMonthName(mo) {
 mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 if (months[mo] !== undefined) {
 return months[mo];
 } else {
 throw new UserException('InvalidMonthNo');
 }
}
let monthName;
try {
 // statements to try
 const myMonth = 15; // 15 is out of bound to raise the exception
 monthName = getMonthName(myMonth);
} catch (e) {
 monthName = 'unknown';
 console.error(e.message, e.name); // pass exception object to err handler
}

