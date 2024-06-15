function operacion1() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);

    if (input1 < input3) {
        var resultado = input1 + input2 + input3;
        document.getElementById("resultado").innerText = "Operación: Suma de los 3 numeros. Resultado: " + resultado;
    } else if (input2 === 0) {
        var menor = Math.min(input1, input3);
        var mayor = Math.max(input1, input3);
        var resultado = mayor - menor;
        document.getElementById("resultado").innerText = "Operación: Resta del mayor y el menor. Resultado: " + resultado;
    } else if (input1 === input2) {
        var resultado = input1 * input2 * input3;
        document.getElementById("resultado").innerText = "Operación: Multiplicación de los 3 numeros. Resultado:" + resultado;
    }
}

function operacion2() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);

    var suma = input1 * input2 + input3;

    if (suma > 10) {
        for (var i = 0; i <input1 * input2 + input3; i++) {
            suma = suma - input3;
        }
        document.getElementById("resultado").innerText = "Operación 2: Multiplicar el primer y segundo número y sumar el tercero" + suma;
    }
}
