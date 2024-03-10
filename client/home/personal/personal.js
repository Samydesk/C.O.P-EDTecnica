const modalPersonal = document.querySelector('.agregar');
const modalP = new bootstrap.Modal(document.getElementById('modalP'));

modalPersonal.addEventListener('click', () => {
    modalP.show();
});

function guardarDatos() {
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const origen = document.getElementById('origen').value;
    const brigada = document.getElementById('brigada').value;
    const cargo = document.getElementById('cargo').value;

    const idFila = Date.now();

    const nuevaFila = document.createElement('tr');
    nuevaFila.setAttribute('data-id', idFila);
    nuevaFila.innerHTML = `
        <td>${cedula}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${origen}</td>
        <td>${brigada}</td>
        <td>${cargo}</td>
        <td><button class="eliminar-fila btn btn-outline-danger center-btn" data-id="${idFila}"><i class="bi bi-trash"></i></button></td>
    `;

    nuevaFila.querySelector('.eliminar-fila').addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        this.closest('tr').remove();
        actualizarEstadoFila(id, true);
    });

    document.getElementById('tablaDatos').querySelector('tbody').appendChild(nuevaFila);

    const datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    datosGuardados.push({ id: idFila, cedula, nombre, apellido, correo, telefono, origen, brigada, cargo, eliminada: false });
    localStorage.setItem('datos', JSON.stringify(datosGuardados));
}

function actualizarEstadoFila(id, eliminada) {
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
  
    datosGuardados = datosGuardados.filter(dato => dato.id !== parseInt(id));

    localStorage.setItem('datos', JSON.stringify(datosGuardados));

    const filaAEliminar = document.querySelector(`tr[data-id="${id}"]`);
    if (filaAEliminar) {
        filaAEliminar.remove();
    }
}

function cargarFilas() {
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    const tabla = document.getElementById('tablaDatos');

    tabla.querySelectorAll('tbody tr').forEach(fila => {
        const id = fila.getAttribute('data-id');
        if (!datosGuardados.some(dato => dato.id === parseInt(id))) {
            fila.remove();
        }
    });

    datosGuardados.forEach(dato => {
        if (!dato.eliminada) {
            const existeFila = tabla.querySelector(`tr[data-id="${dato.id}"]`);
            if (!existeFila) {
                const nuevaFila = document.createElement('tr');
                nuevaFila.setAttribute('data-id', dato.id);
                nuevaFila.innerHTML = `
                    <td>${dato.cedula}</td>
                    <td>${dato.nombre}</td>
                    <td>${dato.apellido}</td>
                    <td>${dato.correo}</td>
                    <td>${dato.telefono}</td>
                    <td>${dato.origen}</td>
                    <td>${dato.brigada}</td>
                    <td>${dato.cargo}</td>
                    <td><button class="eliminar-fila btn btn-outline-danger center-btn" data-id="${dato.id}"><i class="bi bi-trash"></i></button></td>
                `;

                nuevaFila.querySelector('.eliminar-fila').addEventListener('click', function() {
                    actualizarEstadoFila(this.getAttribute('data-id'), true);
                });

                tabla.querySelector('tbody').appendChild(nuevaFila);
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', cargarFilas);

const table = document.getElementById('tablaDatos');
const rowCount = table.rows.length - 1;

localStorage.setItem('rowCount', rowCount);