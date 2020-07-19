// window.onscroll = function() {
//     let desplaza = window.pageYOffset;
//     if (ubicacion > desplaza) {
//         document.getElementById("navbar").style.top = "0px"
//         document.getElementById("navbar").style.transition = "0.5s";
//     } else {
//         document.getElementById('navbar').style.top = "-160px"
//         document.getElementById("navbar").style.transition = "0.5s";
//         // d
//     }
//     ubicacion = desplaza;
//     // console.log(ubicacion)
// };
(function() {
    // lista
    let tareaInput = document.getElementById('tareaInput');
    // tareaInput  
    let agregar = document.getElementById('agregar');
    // btnnuevatarea 
    let tareas = document.getElementById('tareas');
    console.log(tareaInput);
    console.log(agregar);
    console.log(tareas);
    // funciones
    let agregarTarea = function() {
        let tarea = tareaInput.value;
        nuevaTareas = document.createElement('li')
        enlace = document.createElement('a')
        contenido = document.createTextNode(tarea);
        if (tarea == "") {
            tareaInput.setAttribute("placeholder", "agregar una tarea validad");
            tareaInput.className = "error";
            return false;
        }
        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // le establesemos un atributo href
        enlace.setAttribute('href', '#');
        // Agregamos el enlace (a) a la nueva tare (li)
        nuevaTareas.appendChild(enlace);
        // agregamos nueva tarea ala lista
        tareas.appendChild(nuevaTareas);
        // para limpiar el input
        tareaInput.value = "";
        for (let i = 0; i <= tareas.children.length - 1; i++) {
            tareas.children[i].addEventListener('click', function() {
                if(this.parentNode){
          this.parentNode.removeChild(this);
         
         }
                
            });
        }
    };
    // quita el herro en el imput
    let comprobarInput = function() {
       
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agregar tu tarea")
    };
    let eliminarTareas = function(eliminarTareas) {
       
    eliminarTareas.preventDefault()
         if(this.parentNode  ){
          this.parentNode.removeChild(this);
          // let elimina = 0;

         
         }
        
    };
    // eventos
    // agregar tareas
    agregar.addEventListener('click', agregarTarea);
    // comprobar input
    tareaInput.addEventListener('click', comprobarInput)

    // borrando elemento
    for (let i = 0; i <= tareas.children.length - 1; i++) {
       
        tareas.children[i].addEventListener('click', eliminarTareas)
        // if()
    }
}());