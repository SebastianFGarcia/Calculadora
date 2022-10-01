const resultado = document.getElementById('resultado');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');

const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
}

const calcular = (operacion) => {
    let resultadoOperacion;
    if (num1.value === '' || num2.value === '') {
        resultadoOperacion = 'Ingrese dos números';
    }else {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        if (operacion === 'dividir' && b === 0) {
            resultadoOperacion = 'No se puede dividir por 0';
        } else {
            resultadoOperacion = operaciones[operacion](a, b);
        }
    } 
    return resultadoOperacion;
}

sumar.addEventListener('click', () => {
    resultado.value = calcular('sumar');
});

restar.addEventListener('click', () => {
    resultado.value = calcular('restar');
});

multiplicar.addEventListener('click', () => {
    resultado.value = calcular('multiplicar');
});

dividir.addEventListener('click', () => {
    resultado.value = calcular('dividir');
});