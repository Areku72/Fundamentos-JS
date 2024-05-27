function positivoNegativo(){
    numero = prompt("Ingrese un numero para ver si es positivo o negativo: ");

    if(numero > 0){
        document.getElementById("lista").innerHTML = "<h2>Su numero es positivo </h2>";
    } else if (numero < 0){
        document.getElementById("lista").innerHTML = "<h2>Su numero es negativo</h2>";
    } else{
        document.getElementById("lista").innerHYML = "<h2>Su numero es 0</h2>";
    }
}