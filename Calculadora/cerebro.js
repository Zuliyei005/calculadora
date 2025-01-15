// variables
const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');

//eventos
//calculadora.addEventListener('click', añadirNumeros)
console.log("El archivo cerebro.js se ha cargado correctamente.");
//operaciones
let operaciones = [];
let operando ='';

//añadirNumeros
function añadirNumeros(e){
    if(e.target.getAttribute('type') === 'button'){
        
            const valor = e.target.innerText

            if (!isNaN(valor) || valor === '.'){
                operando += valor;
                resultado.value = operando;
            }

            if (e.target.classList.contains('operacion')) {
                if(operando !== '') {
                    operaciones.push(operando);
                    operando = '';
                }

                if (e.target.id === 'sumar') {
                    operaciones.push('+');
                } else if (e.target.id === 'resta'){
                    operaciones.push('-');
                } else if (e.target.id === 'multiplicar') {
                    operaciones.push('*');
                } else if (e.target.id === 'dividir') {
                    operaciones.push('/');
                } else if (e.target.id === 'igual') {
                    operaciones.push(operando);
                    const resultadoOperacion = eval(operaciones.join(''));
                    resultado.value = resultadoOperacion;
                    operaciones + [];
                    operando = '';
                }

                if(e.target.id !== 'igual') {
                    operando = '';
                }

            } 
            if (e.target.id === 'clear'){
                operaciones = [];
                operando = '';
            resultado.value = '';            }
        }
        
    }

    calculadora.addEventListener('click', añadirNumeros)
