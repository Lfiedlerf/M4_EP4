document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MÓDULO REPETIDOR ---
    const btnRepetir = document.getElementById('btn-repetir');
    
    btnRepetir.addEventListener('click', () => {

        const texto = document.getElementById('text-repetir').value;
        const veces = parseInt(document.getElementById('num-repetir').value);
        const salida = document.getElementById('res-repetir');

        if (!texto || isNaN(veces) || veces <= 0) {
            salida.textContent = "Por favor ingrese un texto y un número válido mayor a 0.";
            return;
        }

        const resultado = (texto + " ").repeat(veces).trim(); 
        
        salida.textContent = resultado;
    });


// --- 2. MÓDULO ESTILOS ---
    const btnAplicar = document.getElementById('btn-aplicar');

    btnAplicar.addEventListener('click', () => {
        const colorSeleccionado = document.getElementById('color-picker').value;
        const parrafo = document.getElementById('texto-lorem');

        parrafo.style.backgroundColor = colorSeleccionado;
        parrafo.style.padding = "10px";
        parrafo.style.borderRadius = "5px";
    });


    // --- 3. MÓDULO CALCULADORA ---
    const btnCalcular = document.getElementById('btn-calcular');

    btnCalcular.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('calc-num1').value);
        const num2 = parseFloat(document.getElementById('calc-num2').value);
        const salida = document.getElementById('res-calculadora');

        if (isNaN(num1) || isNaN(num2)) {
            salida.textContent = "Ingrese números válidos.";
            return;
        }

        const suma = num1 + num2;
        const resta = num1 - num2;
        const multi = num1 * num2;
        const div = num2 !== 0 ? (num1 / num2) : "Indefinido (división por 0)";

        let sumaTotal = 0;
        if (typeof div === 'number') {
            sumaTotal = suma + resta + multi + div;
        }

        salida.innerHTML = `
            <p>Suma: ${num1} + ${num2} = <strong>${suma}</strong></p>
            <p>Resta: ${num1} - ${num2} = <strong>${resta}</strong></p>
            <p>Multiplicación: ${num1} * ${num2} = <strong>${multi}</strong></p>
            <p>División: ${num1} / ${num2} = <strong>${div}</strong></p>
            <hr>
            <p><strong>La suma de los resultados es ${sumaTotal}</strong></p>
        `;
    });


    // --- 4. MÓDULO INVERSOR ---
    const btnInvertir = document.getElementById('btn-invertir');

    btnInvertir.addEventListener('click', () => {
        const inputTexto = document.getElementById('text-invertir').value;
        const salida = document.getElementById('res-inversor');

        const textoInvertido = inputTexto.split('').reverse().join('');

        salida.textContent = textoInvertido;
    });

});