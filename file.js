//cargamso el módulo timer-node
const { Timer } = require('timer-node');

//creamos el objeto timer
const timer = new Timer({ label: 'test-timer' });

//importamos node-fetch
const fetch = require('node-fetch');
const recurso = "http://dummy.restapiexample.com/api/v1/employees";

//función para iniciar el timer
function iniciarTimer() {
    //se inicia el timer
    timer.start();

    //mostramos los ms hasta llegar a los 5 segundos
    do{
        console.log(timer.ms());
    } while(timer.ms() <= 5000);

    //pausamos el timer
    timer.pause();

    console.log(timer.time());
}


//recorremos los argumentos del comando
process.argv.forEach(function (val, index, array) { 
     
    //si el tercer argumento es timer
    if((index == 2) && (val == "timer")){
        iniciarTimer();
    }
    
    //si el tercer argumento es api
    if((index == 2) && (val == "api")){
        fetch(recurso)
            .then(res => res.json())
            .then(json => console.log(json));
    }

});

console.log("Hola Mundo");














