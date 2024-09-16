// Arrays iniciales
let numericalArray = [];
let stringArray = [];
let objectArray = [];

// Función para crear los arrays
function createArrays() {
    const numArrayInput = document.getElementById('numericalArray').value;
    const strArrayInput = document.getElementById('stringArray').value;
    const objArrayInput = document.getElementById('objectArray').value;

    numericalArray = numArrayInput.split(',').map(Number); // Convertir a números
    stringArray = strArrayInput.split(','); // Convertir a cadenas
    objectArray = objArrayInput.split(',').map(item => {
        const [key, value] = item.split(':');
        return { [key.trim()]: value.trim() }; // Crear objetos
    });

    document.getElementById('creationResult').innerHTML = `
        <strong>Arrays creados:</strong><br>
        Numérico: [${numericalArray}]<br>
        Cadenas: [${stringArray}]<br>
        Objetos: ${JSON.stringify(objectArray)}
    `;
}

// Función para manipular arrays
function manipulateArrays() {
    // Ejemplo de manipulación: agregar un nuevo elemento a cada array
    numericalArray.push(100);
    stringArray.push('nuevo');
    objectArray.push({ nuevaClave: 'nuevoValor' });

    document.getElementById('manipulationResult').innerHTML = `
        <strong>Arrays manipulados:</strong><br>
        Numérico: [${numericalArray}]<br>
        Cadenas: [${stringArray}]<br>
        Objetos: ${JSON.stringify(objectArray)}
    `;
}

// Función para aplicar iteradores
function useIterators() {
    // Ejemplo: Uso de forEach en cada array
    let numArrayIter = '';
    numericalArray.forEach(num => numArrayIter += ` ${num * 2},`);

    let strArrayIter = '';
    stringArray.forEach(str => strArrayIter += ` ${str.toUpperCase()},`);

    let objArrayIter = '';
    objectArray.forEach(obj => {
        for (const key in obj) {
            objArrayIter += `${key}: ${obj[key]} (iterado), `;
        }
    });

    document.getElementById('iteratorResult').innerHTML = `
        <strong>Iteradores aplicados:</strong><br>
        Numérico (x2): [${numArrayIter}]<br>
        Cadenas (mayúsculas): [${strArrayIter}]<br>
        Objetos (iterados): ${objArrayIter}
    `;
}
