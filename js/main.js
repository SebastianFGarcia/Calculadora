const resultado = document.getElementById('resultado');
const num = document.getElementById('num');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const igual = document.getElementById('igual');
const limpiar = document.getElementById('limpiar');

let num1 = 0;
let num2 = 0;
let operacion = '';

num.addEventListener('input', (event) => {
    if (operacion === '') {
        num1 = Number(event.target.value);
    } else {
        num2 = Number(event.target.value);
    }
});

sumar.addEventListener('click', () => {
    operacion = '+';
});

restar.addEventListener('click', () => {
    operacion = '-';
});

multiplicar.addEventListener('click', () => {
    operacion = '*';
});

dividir.addEventListener('click', () => {
    operacion = '/';
});

igual.addEventListener('click', () => {
    console.log(num1, operacion, num2);
    switch (operacion) {
        case '+':
            resultado.value = num1 + num2;
            break;
        case '-':
            resultado.value = num1 - num2;
            break;
        case '*':
            resultado.value = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado.value = num1 / num2;
            }else{
                resultado.value = 'Error';
            }
            break;
    }
});

limpiar.addEventListener('click', () => {
    resultado.value = '';
    num.value = '';
    num1 = 0;
    num2 = 0;
    operacion = '';
});

