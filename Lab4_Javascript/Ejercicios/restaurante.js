function propina()
{
    const cuenta = parseFloat(document.getElementById('cuenta').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    const resultado = calcularPropina(cuenta, porcentaje);

    document.getElementById('propina').innerText = '$' + resultado.propina;
    document.getElementById('total').innerText = '$' + resultado.total;
}

function calcularPropina(cuenta, porcentaje)
{
    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;
    return {
        propina,
        total
    };
}
