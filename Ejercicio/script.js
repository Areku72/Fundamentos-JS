function noNegative(){
    let array = [];
    let N = parseInt(prompt("Ingrese cantidad de números a trabajar: "))

    for(let i = 0; i < N; i++){
        let num = parseInt(prompt("Ingrese un Numero positivo o negativo: "))
        array.push(num);
    }
    let original = [...array];
    for(let i = 0; i < N; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    document.getElementById("elemento").innerHTML = `Arreglo Original:${original.join(", ")} <br> Arreglo: ${array.join(", ")}`;
};