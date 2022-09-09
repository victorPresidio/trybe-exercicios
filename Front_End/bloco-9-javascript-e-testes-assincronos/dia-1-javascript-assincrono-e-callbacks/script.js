const getPlanet = () => {
    const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: 'kilometers',
        },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

getPlanet(); // Imprime Marte depois de 4 segundos */


//Exercicio 5 e 6
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
    const getTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;
    setTimeout(() => {
        if(messageSuccessfullySent) onSuccess(getTemperature)   
        else onError("Robot is busy")
        
    }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo