// Función para visualizar propiedades del objeto Window
function showWindowProperties() {
    const properties = Object.getOwnPropertyNames(window);
    document.getElementById('windowProperties').textContent = `Propiedades del objeto Window:\n\n${properties.join('\n')}`;
}

// Función para usar métodos del objeto Window
function useWindowMethods() {
    const methods = [
        `alert('Hello, World!');`,
        `console.log('Logging to console');`,
        `window.open('https://www.example.com');`,
        `window.close(); // Este método cierra la ventana actual`
    ];

    document.getElementById('windowMethods').textContent = `Ejemplos de métodos del objeto Window:\n\n${methods.join('\n\n')}`;
}

// Función para visualizar propiedades del objeto Array
function showArrayProperties() {
    const properties = Object.getOwnPropertyNames(Array);
    document.getElementById('arrayProperties').textContent = `Propiedades del objeto Array:\n\n${properties.join('\n')}`;
}

// Función para usar métodos del objeto Array
function useArrayMethods() {
    const methods = [
        `let arr = [1, 2, 3, 4];\narr.push(5); // Añade 5 al final del array\nconsole.log(arr); // Muestra: [1, 2, 3, 4, 5]`,
        `let arr = [1, 2, 3, 4];\nlet removed = arr.pop(); // Elimina el último elemento\nconsole.log(arr); // Muestra: [1, 2, 3]\nconsole.log(removed); // Muestra: 4`,
        `let arr = [1, 2, 3, 4];\nlet joined = arr.join('-'); // Une los elementos en una cadena\nconsole.log(joined); // Muestra: '1-2-3-4'`,
        `let arr = [1, 2, 3, 4];\nlet sliced = arr.slice(1, 3); // Extrae una porción del array\nconsole.log(sliced); // Muestra: [2, 3]`
    ];

    document.getElementById('arrayMethods').textContent = `Ejemplos de métodos del objeto Array:\n\n${methods.join('\n\n')}`;
}

// Función para visualizar propiedades del objeto Number
function showNumberProperties() {
    const properties = Object.getOwnPropertyNames(Number);
    document.getElementById('numberProperties').textContent = `Propiedades del objeto Number:\n\n${properties.join('\n')}`;
}

// Función para usar métodos del objeto Number
function useNumberMethods() {
    const methods = [
        `Number.isInteger(10); // Verifica si el valor es un número entero\nconsole.log(Number.isInteger(10)); // Muestra: true`,
        `Number.parseFloat('10.5'); // Convierte una cadena en número flotante\nconsole.log(Number.parseFloat('10.5')); // Muestra: 10.5`,
        `Number.MAX_VALUE; // Muestra el valor máximo que puede tomar un número\nconsole.log(Number.MAX_VALUE);`,
        `Number.MIN_VALUE; // Muestra el valor mínimo que puede tomar un número\nconsole.log(Number.MIN_VALUE);`
    ];

    document.getElementById('numberMethods').textContent = `Ejemplos de métodos del objeto Number:\n\n${methods.join('\n\n')}`;
}
