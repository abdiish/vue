//Instanciar vue, llamada a libreria 
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Curso vue.js', 
        frutas: ['Manzana','Platano','Piña','Mango','Cereza'],
        personas: [
            {nombre:'Juan' , edad:20},
            {nombre:'Luis' , edad:21},
            {nombre:'Cesar', edad:23}
        ] 
    }
})