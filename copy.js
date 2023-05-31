// METODO 1

/*document.oncopy = event => {
    event.preventDefault();
    event.clipboardData.setData('text/plain', 'DONDE CREES QUE VAS PILLIN! \n');
}*/


// METODO 2

// Función para manejar el evento de copiado
function handleCopy(event) {
    // Texto que deseas copiar
    var textoPersonalizado = "Texto personalizado que deseas copiar";
    
    // Acceder al portapapeles
    var clipboardData = event.clipboardData || window.clipboardData;
    
    // Agregar el texto personalizado al portapapeles
    clipboardData.setData("text", textoPersonalizado);
    
    // Evitar que se copie el texto original
    event.preventDefault();
    
    // Mostrar un mensaje o realizar alguna otra acción
    console.log("Texto personalizado copiado: " + textoPersonalizado);
  }
  
  // Asignar el evento de copiado al documento
  document.addEventListener("copy", handleCopy);