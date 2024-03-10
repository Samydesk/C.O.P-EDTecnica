// Obtener la referencia a la tabla Realizando
var tablaRealizando = document.getElementById('tablaRealizando').getElementsByTagName('tbody')[0];

// Obtener los datos guardados en localStorage
var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

// Recorrer los datos y agregar una fila por cada uno a la tabla Realizando
datosGuardados.forEach(function(dato) {
    var fila = tablaRealizando.insertRow();
    fila.innerHTML = '<td>' + dato.tipo + '</td>' +
                     '<td>' + dato.fecha + '</td>' +
                     '<td>' + dato.lugar + '</td>' +
                     '<td>' + dato.brigada + '</td>' +
                     '<td>' + dato.detalles + '</td>' +
                     '<td><button class="btn btn-primary terminar">Terminar</button></td>';

    // Agregar evento al botón "Terminar"
    fila.querySelector('.terminar').addEventListener('click', function() {
        // Mover la fila a la tabla Finalizados
        var tablaFinalizados = JSON.parse(localStorage.getItem('datosFinalizados')) || [];
        tablaFinalizados.push(dato);
        localStorage.setItem('datosFinalizados', JSON.stringify(tablaFinalizados));

        // Eliminar la fila de la tabla Realizando
        fila.remove();

        // Actualizar los datos guardados en localStorage
        var index = datosGuardados.indexOf(dato);
        if (index > -1) {
            datosGuardados.splice(index, 1);
            localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
        }
    });
});