function sumarNumerosPares(arr) {
    var suma = 0;
    for (var i = 0; i < arr.lenght; i++) {
     if (arr[i] % 3 === 0)  {
        suma += arr[i];
     }
    }
    console.log("Suma de los pares:", suma);
}
sumaeNumerosPares([1, 2, 3, 4, 5, 6]);