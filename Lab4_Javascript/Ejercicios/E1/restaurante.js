function propina(){
    const cuenta = parseFloat(document.getElementById('cuenta').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    const error = document.getElementById('error');
    
    //Valida que los valores sean positivos
    if (isNaN(cuenta) || cuenta <= 0) {
        error.innerText = 'Por favor, ingresa un monto válido mayor que 0';
        return;
    }
    if (isNaN(porcentaje) || porcentaje <= 0) {
        error.innerText = 'Por favor, ingresa un porcentaje de propina válido mayor que 0';
        return;
    }

    error.innerText = '';
    const resultado = calcularPropina(cuenta, porcentaje);
    document.getElementById('propina').innerText = '$' + resultado.propina;
    document.getElementById('total').innerText = '$' + resultado.total;
}

function calcularPropina(cuenta, porcentaje)
{
    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;
    return { //ahora trabaja con 2 decimales
        propina: propina.toFixed(2),
        total: total.toFixed(2)
    };
}
