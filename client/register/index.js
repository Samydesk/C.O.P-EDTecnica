import {
  createUserFromAPI
} from './fetchAPI.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: event.target.nombre.value,
    email: event.target.email.value,
    password: event.target.password.value,
  }; 

  createUserFromAPI(data)
  .then(() => {
    window.location.pathname = 'login/'
   })
   .catch(err => console.error(err));

});