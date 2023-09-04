//operacion sumar
function sumar (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}
//operacion restar
function restar(valor1,valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}
//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}
//operacion divir
function dividir(valor1,valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function calculadora(){
    let operacion;

    while (operacion != "x" && operacion !="salir") {
        operacion = prompt(
            "¿que operacion queres hacer?\n+: Sumar\n-:Ñ Restar\n*: Multiplicar\n/: Division\nx: Salir"
        );

    switch (operacion) {
        case "+":
            valor1 = parseInt( prompt("ingrese el primer valor"));
            valor2 = parseInt(prompt("ingrese el segundo valor"));
            alert("El resultado de la suma es"+ sumar(valor1,valor2));
            break;
        case "-":
                valor1 = parseInt( prompt("ingrese el primer valor"));
                valor2 = parseInt(prompt("ingrese el segundo valor"));
                alert("El resultado de la resta es"+ restar(valor1,valor2));
                break;   
        case "*":
                    valor1 = parseInt( prompt("ingrese el primer valor"));
                    valor2 = parseInt(prompt("ingrese el segundo valor"));
                    alert("El resultado de la multiplicacion es"+ multiplicar(valor1,valor2));
                    break; 
        case "/":
                        valor1 = parseInt( prompt("ingrese el primer valor"));
                        valor2 = parseInt(prompt("ingrese el segundo valor"));
                        alert("El resultado de la division es"+ dividir(valor1,valor2));
                        break; 
        case "x":
            break;
            default:
                alert("La operacion ingresa es invalida");                      

    }
}
}