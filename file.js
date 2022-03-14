//cargamso el módulo timer-node
const { Timer } = require('timer-node');

//creamos el objeto timer
const timer = new Timer({ label: 'test-timer' });

//se inicia el timer
timer.start();

//mostramos los ms hasta llegar a los 5 segundos
do{
    console.log(timer.ms());
} while(timer.ms() <= 5000);

//pausamos el timer
timer.pause();

console.log(timer.time());














