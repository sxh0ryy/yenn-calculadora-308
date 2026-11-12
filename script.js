function calcular() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero2 !== 0 ? (numero1 / numero2) : "No se puede dividir entre 0";

    document.getElementById("suma").innerHTML = "La suma es: " + suma;
    document.getElementById("resta").innerHTML = "La resta es: " + resta;
    document.getElementById("multiplicacion").innerHTML = "La multiplicacion es: " + multiplicacion;
    document.getElementById("division").innerHTML = "La division es: " + division;
    document.getElementById("Total"). textContent="el resultado es:" + resultado 
}