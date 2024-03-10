


/*ModalPersonal*/
const modalPersonal = document.querySelector('.agregar');
const modalP = new bootstrap.Modal(document.getElementById('modalP'));

modalPersonal.addEventListener('click', () => {
  modalP.show();
});


const firebaseConfig = {
  apiKey: "AIzaSyCFLnGiUU8iCvEVyFnuoEcgmDNrNjkdRiM",
  authDomain: "personal-d7b98.firebaseapp.com",
  projectId: "personal-d7b98",
  storageBucket: "personal-d7b98.appspot.com",
  messagingSenderId: "332853933218",
  appId: "1:332853933218:web:294bce2e796008cd3bd3fb"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Función para guardar datos en Firebase
function guardarDatosFirebase(datos) {
  database.ref('datos').push(datos);
}

// Función para eliminar un dato de Firebase
function eliminarDatoFirebase(key) {
  database.ref('datos').child(key).remove();
}

// Función para abrir el modal al hacer clic en el botón "Agregar Nuevo"
document.getElementById("abrirModal").addEventListener("click", function() {
  // Mostrar el modal
});

// Función para guardar los datos desde el modal
function guardarDatos() {
  const nuevoDato = {
      cedula: document.getElementById("cedula").value,
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      correo: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      origen: document.getElementById("origen").value,
      brigada: document.getElementById("brigada").value,
      cargo: document.getElementById("cargo").value
  };

  guardarDatosFirebase(nuevoDato);

  // Limpiar campos y cerrar el modal después de guardar
}

// Recuperar y mostrar los datos guardados al cargar la página
database.ref('datos').on('value', function(snapshot) {
  const tablaDatos = document.querySelector("#tablaDatos tbody");
  
  snapshot.forEach(function(childSnapshot) {
      const dato = childSnapshot.val();
      
      // Crear una nueva fila en la tabla con los datos recuperados
      const newRow = tablaDatos.insertRow();
      
      // Insertar celdas con los valores recuperados
      // Puedes adaptar esto según tus campos de datos
      
      // Botón para eliminar un registro
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', function() {
          eliminarDatoFirebase(childSnapshot.key);
          newRow.remove(); // Eliminar la fila de la tabla al eliminar el dato
      });

      // Agregar botón de eliminar a la fila de la tabla
      newRow.insertCell().appendChild(deleteButton);
      
      // Agregar más celdas según tu estructura y campos de datos
  });
});