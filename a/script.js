// Función para manejar el clic en el botón de "me gusta"
function mensage(button) {
    // Verificar si el botón ya ha sido presionado
    if (button.classList.contains('liked')) {
        alert("Ya has dado like a esta definición.");
        return; // Salir de la función si ya se ha dado like
    }

    // Obtener el texto actual del botón
    let currentText = button.innerText;
    
    // Extraer el número de "likes" del texto
    let likeCount = parseInt(currentText.split(' ')[0]);
    
    // Incrementar el contador de "likes" en 1
    likeCount += 1;
    
    // Actualizar el texto del botón con el nuevo conteo
    button.innerText = `${likeCount} likes`;

    // Marcar el botón como "liked"
    button.classList.add('liked');
}

// Función para manejar el clic en el botón "Add Definition"
function texto(button) {
    // Definición de Dojonary
    alert("¿de verdad tenemos que hacer esta parte?");
}
function addDefinition(button) {
    // Obtener el contenedor donde se añadirán las definiciones
    const definitionContainer = document.querySelector('.row');

    // Crear un nuevo elemento de definición
    const newDefinition = document.createElement('div');
    newDefinition.className = 'box_definition';
    newDefinition.innerHTML = `
        <div class="left">
            <h1>nueva definición</h1>
            <p><em>noun</em></p>
            <p>Plural: <em>nuevas palabras</em></p>
            <button class="btn_like" onclick="mensage(this)">0 likes</button>
        </div>
        <p class="definition-text">Definición de la nueva palabra aquí.</p>
    `;

    // Agregar la nueva definición al contenedor
    definitionContainer.appendChild(newDefinition);

    // Eliminar el botón
    button.remove();
}
    //le falta el boton de login