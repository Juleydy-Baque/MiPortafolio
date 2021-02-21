window.onload = () => {
    document.querySelector(".flecha-derecha").addEventListener("click", clickRight);
    document.querySelector(".flecha-izquierda").addEventListener("click", clickLeft);
    document.querySelector(".send-button").addEventListener("click", showNotification);
    document.querySelectorAll(".project").forEach(element => {
        element.addEventListener("click", e => openModal(e));
    });
    document.body.addEventListener("click", e => closeModal(e));
};
  
  /** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
  function clickRight() {
      const currentLeft = parseInt(
          getComputedStyle(document.querySelector(".project-container")).left, 10
          );
          if (currentLeft < -270) {
            return;
        }
        let newValue = currentLeft - 270;
        document.querySelector(".project-container").style.left = `${newValue}px`;
    }
  
  /** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
  function clickLeft() {
      const currentLeft = parseInt(
          getComputedStyle(document.querySelector(".project-container")).left, 10
          );
          
          if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
            return;
        }
        
        let newValue = currentLeft + 270;
        document.querySelector(".project-container").style.left = `${newValue}px`;
    }
  
  /** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
  function showNotification() {
      document.querySelector(".notificaciones").style.display = "flex";
      setTimeout(function() {
          document.querySelector(".notificaciones").style.display = "none";
        }, 3000);
    }
  
  /** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
  function openModal(e) {
      document.querySelector(".modal-container").style.display = "flex";
    }
  
  /** Esta funcion se llama para cerrar el modal */
  function closeModal(e) {

    if (
        e.target.className.includes("project") || e.target.className === "modal"
        ) 
        {
            return;
        } else 
        
        {
            document.querySelector(".modal-container").style.display = "none";
    }
}

    
  
