console.log("Vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'Ahora' y 'Fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let Ahora = 2024;
    let Fecha_nac = 2006;
    let Edad = Ahora - Fecha_nac;
    alert("Mi edad es: " + Edad);
    // Tu código aquí
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    let var1 = 18;
    let var2 = var1;
    alert("El valor de var2 es: " + var2);
    // Tu código aquí
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1' , 'num2' y 'num3', resta 'num2' de 'num1' y 'num3', multiplica 'num1' por 'num2' y 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = 27;
    let num2 = 40;
    let num3 = 10;
    let suma = num1 + num2 + num3;
    let resta = num2 - num1 - num3;
    let multi = num1 * num2 * num3;
    let divicion = num1 / 120;
    alert("La suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicación es: " + multi + "\nLa divición es: " + divicion);
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'Dirección' y 'n_Casa'.
    // Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
    function manipularCadenas() {
    let direccion = "Calle general";
    let n_casa = "1235";
    let mensaje = direccion + "" + n_casa;
    alert(`la longitud del mensaje es: ${mensaje.length} \nCaracter antepenultimo: ${mensaje[mensaje.length - 3]}`);
    // Tu código aquí
    }
    /* Ejercicio 5: Suma de indices
    Sumar el ultimo valor, con el penúltimo más el valor 1 de las posiciones
    Mostrar el resultado en el HTML con un Alert*/
    function Suma_indices(){
    let array = [1,2,3,4,5,6,7];
    let ind_1 = array[6];
    let ind_2 = array[5];
    let ind_3 = array[0];
    let sum_ind = ind_1 + ind_2 + ind_3;
    alert("La suma de el ultimo valor, el penultimo y el primer valor es: " + sum_ind);
    }