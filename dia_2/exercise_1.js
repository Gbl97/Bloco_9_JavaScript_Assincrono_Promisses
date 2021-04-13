 // Exercicio 1
const showJoke = ({ joke }) => {
    const getID = document.getElementById("jokeContainer");
    getID.innerHTML = joke;
}
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data));
};

window.onload = () => fetchJoke();



