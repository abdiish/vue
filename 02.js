const app = new Vue({
    el: '#app',
    data: {
        title: 'Uso de v-Model y evento click',
        frutas: [
            {nombre:'Pera' , cantidad:20},
            {nombre:'Manzana' , cantidad:21},
            {nombre:'Piña', cantidad:0}
        ],
        newFruit:'',
        total: 0
    },
    //palabra reservada
    methods:{
        addFruit () {
            //para acceder a data utilizamos la palabra reservada this
            this.frutas.push({ //Se agrega otro objeto
                nombre: this.newFruit, cantidad: 0
            });
            this.newFruit = '';
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0; //Se inicializa en 0
            for(fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
             }
             return this.total;
        }
     }
})