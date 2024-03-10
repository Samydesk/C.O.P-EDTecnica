const from = document.getElementById('form');
import {
    apiFecthUser,
    datosValidos,
    apiFecthOneUser,
} from './getUserDB.js'

from.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
    };


    //TODO: Change
    apiFecthUser()
    .then((listaDeUsuarios) => {
        let user = listaDeUsuarios.find(userEmail => {
            if (userEmail.cadaUsuario.email === data.email) {
                return userEmail.cadaUsuario;
            }
        })
        console.log(user);
        if(user === undefined) return alert('Correo o registrados!');

        datosValidos(user.id, data.password)
        .then((result) => {
            const {
                message,
                error
            } = result;
            if (message) return window.location.pathname = '/'
            if (error) return alert('error')
        })
    .catch(err => alert(err));
    })
.catch(err => console.log(err));
});