const resultado = document.getElementById('resultado');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const igual = document.getElementById('igual');
const limpiar = document.getElementById('limpiar');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

let operacion = '';
let numero1 = '';
let numero2 = '';
let resultadoOperacion = '';

const operaciones = {
    sumar: (numero1, numero2) => numero1 + numero2,
    restar: (numero1, numero2) => numero1 - numero2,
    multiplicar: (numero1, numero2) => numero1 * numero2,
    dividir: (numero1, numero2) => numero1 / numero2,
};

const limpiarPantalla = () => {
    resultado.value = '';
    numero1 = '';
    numero2 = '';
    resultadoOperacion = '';
};

const mostrarResultado = () => {
    resultado.value = resultadoOperacion;
};

const mostrarNumero = (numero) => {
    resultado.value += numero;
};

const realizarOperacion = () => {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    if (numero2 === 0 && operacion === 'dividir') {
        resultadoOperacion = 'No se puede dividir por 0';
        return;
    }else{
        resultadoOperacion = operaciones[operacion](numero1, numero2);
    }
}

const asignarOperacion = (operacionSeleccionada) => {
    operacion = operacionSeleccionada;
    numero1 = resultado.value;
    resultado.value = '';
}

const asignarNumero = (numero) => {
    if (resultado.value === '') {
        resultado.value = numero;
    } else {
        resultado.value += numero;
    }
}

const asignarResultado = () => {
    resultado.value = resultadoOperacion;
}

const asignarIgual = () => {
    numero2 = resultado.value;
    realizarOperacion();
    asignarResultado();
}

const asignarSuma = () => {
    asignarOperacion('sumar');
}

const asignarResta = () => {
    asignarOperacion('restar');
}

const asignarMultiplicacion = () => {
    asignarOperacion('multiplicar');
}

const asignarDivision = () => {
    asignarOperacion('dividir');
}

const asignarLimpiar = () => {
    limpiarPantalla();
}

btn0.addEventListener('click', () => asignarNumero('0'));
btn1.addEventListener('click', () => asignarNumero('1'));
btn2.addEventListener('click', () => asignarNumero('2'));
btn3.addEventListener('click', () => asignarNumero('3'));
btn4.addEventListener('click', () => asignarNumero('4'));
btn5.addEventListener('click', () => asignarNumero('5'));
btn6.addEventListener('click', () => asignarNumero('6'));
btn7.addEventListener('click', () => asignarNumero('7'));
btn8.addEventListener('click', () => asignarNumero('8'));
btn9.addEventListener('click', () => asignarNumero('9'));
sumar.addEventListener('click', asignarSuma);
restar.addEventListener('click', asignarResta);
multiplicar.addEventListener('click', asignarMultiplicacion);
dividir.addEventListener('click', asignarDivision);
igual.addEventListener('click', asignarIgual);
limpiar.addEventListener('click', asignarLimpiar);

// Language: javascript