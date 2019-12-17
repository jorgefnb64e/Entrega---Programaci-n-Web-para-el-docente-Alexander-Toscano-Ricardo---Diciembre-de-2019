<template>
    <v-layout row wrap justify-center align-start style="height: 100vh" id="id_1">
        <v-card width="500" v-if="show == 1">
            <v-card-title>
                <h2>Registro</h2>
            </v-card-title>
            <v-card-text>
                <v-text-field label="Nombre 1" v-model="n1"></v-text-field>
                <v-text-field label="Nombre 2" v-model="n2"></v-text-field>
                <v-text-field label="Apellido 1" v-model="a1"></v-text-field>
                <v-text-field label="Apellido 2" v-model="a2"></v-text-field>
                <v-text-field label="Cédula" v-model="ced"></v-text-field>
                <v-text-field label="Teléfono" v-model="tel"></v-text-field>
                <v-text-field label="Dirección" v-model="dir"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn id="id_3" color="success" @click="registro()">Registro</v-btn>
            </v-card-actions>
        </v-card>
        <v-layout id="id_2" row wrap justify-center align-center style="height: 100vh" v-if="show == 2">
            <v-btn style="width: 30%" color="#00A052" depressed small x-large to="/vendedores" class="ml-4">Vendedores</v-btn>
        </v-layout>
    </v-layout>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            n1: '',
            n2: '',
            a1: '',
            a2: '',
            ced: '',
            tel: '',
            dir: '',
            show: 1
        }
    },
    methods: {
        registro() {
            if (this.n1 != '' && this.n2 != '' && this.a1 != '' && this.a2 != '' && this.ced != '' && this.tel != '' && this.dir != '') {
                var datos = {
                    nombre_1: this.n1,
                    nombre_2: this.n2,
                    apellido_1: this.a1,
                    apellido_2: this.a2,
                    cedula: this.ced,
                    telefono: this.tel,
                    direccion: this.dir
                }
                axios.post('http://localhost:3000/vendedor', datos)
                    .then((response) => {
                        if(response.data.nV != null) {
                            console.log(response.data);
                            alert('Registrado!')
                            this.show = 2
                        } else {
                            alert('No registrado!')
                        }
                    })
            } else {
                alert('Faltan datos!')
            }
        }
    }
}
</script>

<style scoped>
#id_1{
    background-image: url('../img.jpg');
    background-size: 100%;
    background-attachment: fixed;
    font-family: 'Century Gothic';
}

#id_2{
font-family: 'Century Gothic';

}

#id_3{
transition: all 0.5s;
}

#id_3:hover{
transform: scale(1.1);

}

</style>