const generarPassword = (base, length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};;

const generar = () => {
    let inputLength = document.getElementById('longitud');
    const incluyeMayus = document.getElementById('incluyeMayus');
    const incluyeMinus = document.getElementById('incluyeMinus');
    const incluyeNums = document.getElementById('incluyeNums');
    const incluyeSymbols = document.getElementById('incluyeSymbols');
    
    const passwordField = document.getElementById('password');

    let longitud = parseInt(inputLength.value);

    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";


    let base = '';//caracteres disponibles a usar

    if (incluyeMayus.checked) base += mayus;
    if (incluyeMinus.checked) base += minus;
    if (incluyeNums.checked) base += numbers;
    if (incluyeSymbols.checked) base += symbols;

    if (base === '') {
        alert('Por favor, selecciona al menos un tipo de carácter.');
        return;
    }
    const generatedPassword = generarPassword(base, longitud);
    passwordField.value = generatedPassword;
};

window.addEventListener("DOMContentLoaded", () => {
    const btnGenerate = document.getElementById('btnGenerate');
    btnGenerate.addEventListener("click", generar);
});


function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');

    document.getElementById('message').innerText = 'Contraseña copiada al portapapeles';
    setTimeout(() => {
        document.getElementById('message').innerText = '';
    }, 2000);
}