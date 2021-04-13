const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
   `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// Exercicio 1 
// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// Exercicio 2
// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Exercicio 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// setTimeout(() => {
//   getPlanet(); // imprime Marte depois de 4 segundos
// }, 4000);

// // Exercicio 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// const sendMarsTemperature = ((callback) => {
//   const temperatura = callback();

//   setTimeout(() => {
//     console.log(`Mars temperature is: ${temperatura} degree Celsius`);
//   }, messageDelay());

//   messageDelay();
// }); 

// // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature(getMarsTemperature);

// Exercicio 5
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = ((callback) => {
  setTimeout(() => {
    callback(getMarsTemperature());
  }, messageDelay());
});
sendMarsTemperature(temperatureInFahrenheit); //imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet);
