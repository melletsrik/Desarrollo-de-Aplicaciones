//1 Escribir el siguiente código:
const foo = () => {
    console.log("foobar");
   }
   foo(); 
   

//4 Corregir y actualizar la grabación.
const fooo = (mensaje) => {
console.log(mensaje);
  }
  fooo("Hola mundo"); 
  

//5. Escribir el siguiente código
function sayHello() {
    return "Hello, ";
   }
   function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
   }
   
   greeting(sayHello, "JavaScript!");


//9. Escribir el siguiente código:
function sayHello() {
    return () => {
    console.log("Hello!");
    }
   }

//12. Corregir y actualizar la grabación.
function sayHello() {
    return () => {
    console.log("Hello!");
    }
    
   }
   sayHello()();


