function valorarPuntuaciones(){
    let puntacion = parseInt(prompt("ingrese su puntacion"));
    let resultado = "";

    if (puntacion >= 90){
    } else if ( puntacion >=70 && puntacion <=89){
        resultado = `excelente - ${puntacion}`;
    } else if (puntacion >=70){
        resultado = `necesitas mejorar - ${puntuacion}`;
    } else{
        resultado = `ingrese un valor valido`;
    }
document.getElementById("lista").innerHTML = resultado;
}