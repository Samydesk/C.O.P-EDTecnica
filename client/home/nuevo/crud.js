/*Modal1*/ 
const modalSolicitado = document.querySelector('.modalSolicitado');
const modal1 = new bootstrap.Modal(document.getElementById('modal1'));

modalSolicitado.addEventListener('click', () => {
  modal1.show();
});

/*Modal2 */
const modalHomicidio = document.querySelector('.modalHomicidio');
const modal2 = new bootstrap.Modal(document.getElementById('modal2'));

modalHomicidio.addEventListener('click', () => {
  modal2.show();
});

/*Modal3 */
const modalDroga = document.querySelector('.modalDroga');
const modal3 = new bootstrap.Modal(document.getElementById('modal3'));

modalDroga.addEventListener('click', () => {
  modal3.show();
});

/*Modal4 */
const modalSecuestro = document.querySelector('.modalSecuestro');
const modal4 = new bootstrap.Modal(document.getElementById('modal4'));

modalSecuestro.addEventListener('click', () => {
  modal4.show();
});

/*Modal5 */
const modalViolacion = document.querySelector('.modalViolacion');
const modal5 = new bootstrap.Modal(document.getElementById('modal5'));

modalViolacion.addEventListener('click', () => {
  modal5.show();
});


/*Modal6 */
const modalPorteIlicito = document.querySelector('.modalPorteIlicito');
const modal6 = new bootstrap.Modal(document.getElementById('modal6'));

modalPorteIlicito.addEventListener('click', () => {
  modal6.show();
});

/*Modal7*/
const modalRoboGenerico = document.querySelector('.modalRoboGenerico');
const modal7 = new bootstrap.Modal(document.getElementById('modal7'));

modalRoboGenerico.addEventListener('click', () => {
  modal7.show();
});

/*Modal8*/
const modalHurtoGenerico = document.querySelector('.modalHurtoGenerico');
const modal8 = new bootstrap.Modal(document.getElementById('modal8'));

modalHurtoGenerico.addEventListener('click', () => {
  modal8.show();
});

/*Modal9*/
const modalViolenciaGenero = document.querySelector('.modalViolenciaGenero');
const modal9 = new bootstrap.Modal(document.getElementById('modal9'));

modalViolenciaGenero.addEventListener('click', () => {
  modal9.show();
});

/*Modal10*/
const modalLesiones = document.querySelector('.modalLesiones');
const modal10 = new bootstrap.Modal(document.getElementById('modal10'));

modalLesiones.addEventListener('click', () => {
  modal10.show();
});

/*Modal11*/
const modalResistencia = document.querySelector('.modalResistencia');
const modal11 = new bootstrap.Modal(document.getElementById('modal11'));

modalResistencia.addEventListener('click', () => {
  modal11.show();
});

/*Modal12*/
const modalOtros = document.querySelector('.modalOtros');
const modal12 = new bootstrap.Modal(document.getElementById('modal12'));

modalOtros.addEventListener('click', () => {
  modal12.show();
});




document.getElementById('Guardar-enviar1').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo1').value;
  var fecha = document.getElementById('fecha1').value;
  var lugar = document.getElementById('lugar1').value;
  var brigada = document.getElementById('brigada1').value;
  var detalles = document.getElementById('documento1').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar2').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo2').value;
  var fecha = document.getElementById('fecha2').value;
  var lugar = document.getElementById('lugar2').value;
  var brigada = document.getElementById('brigada2').value;
  var detalles = document.getElementById('documento2').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});


document.getElementById('Guardar-enviar3').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo3').value;
  var fecha = document.getElementById('fecha3').value;
  var lugar = document.getElementById('lugar3').value;
  var brigada = document.getElementById('brigada3').value;
  var detalles = document.getElementById('documento3').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});


document.getElementById('Guardar-enviar4').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo4').value;
  var fecha = document.getElementById('fecha4').value;
  var lugar = document.getElementById('lugar4').value;
  var brigada = document.getElementById('brigada4').value;
  var detalles = document.getElementById('documento4').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar5').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo5').value;
  var fecha = document.getElementById('fecha5').value;
  var lugar = document.getElementById('lugar5').value;
  var brigada = document.getElementById('brigada5').value;
  var detalles = document.getElementById('documento5').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar6').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo6').value;
  var fecha = document.getElementById('fecha6').value;
  var lugar = document.getElementById('lugar6').value;
  var brigada = document.getElementById('brigada6').value;
  var detalles = document.getElementById('documento6').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar7').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo7').value;
  var fecha = document.getElementById('fecha7').value;
  var lugar = document.getElementById('lugar7').value;
  var brigada = document.getElementById('brigada7').value;
  var detalles = document.getElementById('documento7').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar8').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo8').value;
  var fecha = document.getElementById('fecha8').value;
  var lugar = document.getElementById('lugar8').value;
  var brigada = document.getElementById('brigada8').value;
  var detalles = document.getElementById('documento8').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});


document.getElementById('Guardar-enviar9').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo9').value;
  var fecha = document.getElementById('fecha9').value;
  var lugar = document.getElementById('lugar9').value;
  var brigada = document.getElementById('brigada9').value;
  var detalles = document.getElementById('documento9').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});


document.getElementById('Guardar-enviar10').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo10').value;
  var fecha = document.getElementById('fecha10').value;
  var lugar = document.getElementById('lugar10').value;
  var brigada = document.getElementById('brigada10').value;
  var detalles = document.getElementById('documento10').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});


document.getElementById('Guardar-enviar11').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo11').value;
  var fecha = document.getElementById('fecha11').value;
  var lugar = document.getElementById('lugar11').value;
  var brigada = document.getElementById('brigada11').value;
  var detalles = document.getElementById('documento11').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});



document.getElementById('Guardar-enviar12').addEventListener('click', function() {
  // Obtener los valores de los campos del modal
  var tipo = document.getElementById('tipo12').value;
  var fecha = document.getElementById('fecha12').value;
  var lugar = document.getElementById('lugar12').value;
  var brigada = document.getElementById('brigada12').value;
  var detalles = document.getElementById('documento12').value;

  // Crear un objeto con los datos
  var nuevoDato = {
      tipo: tipo,
      fecha: fecha,
      lugar: lugar,
      brigada: brigada,
      detalles: detalles
  };

  // Obtener los datos existentes de localStorage o inicializar un array vacío
  var datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

  // Agregar el nuevo dato al array
  datosGuardados.push(nuevoDato);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
});