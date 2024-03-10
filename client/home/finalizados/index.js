// Obtener la referencia a la tabla Finalizados
var tablaFinalizados = document.getElementById('tablaFinalizados').getElementsByTagName('tbody')[0];

// Obtener los datos guardados en localStorage
var datosFinalizados = JSON.parse(localStorage.getItem('datosFinalizados')) || [];

// Recorrer los datos y agregar una fila por cada uno a la tabla Finalizados
datosFinalizados.forEach(function(dato, index) {
    var fila = tablaFinalizados.insertRow();
    fila.innerHTML = '<td>' + dato.tipo + '</td>' +
                     '<td>' + dato.fecha + '</td>' +
                     '<td>' + dato.lugar + '</td>' +
                     '<td>' + dato.brigada + '</td>' +
                     '<td>' + dato.detalles + '</td>' +
                     '<td><button class="btn btn-danger eliminar"><i class="bi bi-trash"></i></button></td>';

    // Agregar evento al botón "Eliminar"
    fila.querySelector('.eliminar').addEventListener('click', function() {
        // Eliminar la fila de la tabla Finalizados
        tablaFinalizados.deleteRow(index);

        // Actualizar los datos guardados en localStorage
        datosFinalizados.splice(index, 1);
        localStorage.setItem('datosFinalizados', JSON.stringify(datosFinalizados));
    });
});