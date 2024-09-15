//2.a
{
    let nombre = "Melissa";
    var edad = 19;
    const meses = 12;
    console.log(nombre);
    console.log(edad);
    console.log(meses);

}
//*errores
//console.log(nombre); 
//console.log(edad);
//console.log(meses);

//2.b
console.log(x === undefined); // true
var x = 3;
// devolverá un valor de undefined
var myvar = 'my value';
(function() {
    console.log(myvar); // undefined
    var myvar = 'valor local';
    console.log(myvar);

})();
console.log(myvar); 

//2.c
function fuera(){
    var v_fuera = 7
    console.log("fx externa")
    console.log(v_fuera)
    function dentro(){
        var v_dentro = 8
        console.log("fx interna")
        console.log(v_fuera)
        console.log(v_dentro)
    }
    dentro()
}
fuera()
//*errores
//*console.log(v_fuera)
//*console.log(v_dentro)

//2.d
//2.d.1
var answer = 42;
answer = 'Gracias por todo el pescado...';
//2.d.3
parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Hello", 8); // No es un número en absoluto
parseInt("0x7", 10); // No es de base 10
parseInt("546", 2); // Los dígitos no son válidos para representaciones binarias.
//2.d.7
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // displays "10"
alert("45 .toString() is " + 45 .toString()); //displays "45"
var pt2d = 7;
alert(pt2d.toString(2)) // Displays "111"