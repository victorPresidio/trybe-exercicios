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
  
  getPlanet(); // Imprime Marte depois de 4 segundos

  //EXERCÍCIO 4-
  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const getTemperature = getMarsTemperature();
    setTimeout(() => console.log(`A temperatura de Marte é: ${getTemperature} graus celsius`), messageDelay());
}
sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo