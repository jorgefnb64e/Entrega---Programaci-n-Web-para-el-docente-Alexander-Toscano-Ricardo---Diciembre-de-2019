<template>
    <v-layout id="id_7" row wrap justify-center>
        <v-flex id="id_1" xs12>
            <v-layout  justify-center>
        <h1>VENDEDORES</h1>
            </v-layout>
        </v-flex>
        <v-flex id="id_2" xs12>
            <v-layout justify-center>
        <v-btn style="width: 30%" color="#00A052" depressed small x-large @click="getVendedores">Mostrar Vendedores</v-btn>
        </v-layout>
        </v-flex>
        <table id="id_5"> 
            <tr id="id_4">
                <th>Primer Nombre</th>
                <th>Segundo Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Cedula</th>
                <th>Telefono</th>
                <th>Direccion</th>
            </tr>
            <tr v-for="(vendedor_alias, index) in vendedores" :key="index" id="id_3">
                <td>{{vendedor_alias.nombre_1}}</td>
                <td>{{vendedor_alias.nombre_2}}</td>
                <td>{{vendedor_alias.apellido_1}}</td>
                <td>{{vendedor_alias.apellido_2}}</td>
                <td>{{vendedor_alias.cedula}}</td>
                <td>{{vendedor_alias.telefono}}</td>
                <td>{{vendedor_alias.direccion}}</td>
            </tr>
        </table>

        
        <v-flex id="id_1" xs12>
            <v-layout  justify-center>
                <h1>AÑADIR ESTUDIANTE</h1>
            </v-layout>
        </v-flex>
        <v-flex id="id_6" xs12>
            <v-layout  justify-center>
               <v-text-field  v-model="nombre_1" :counter="99"  label="Primer Nombre"></v-text-field>
               <v-text-field v-model="nombre_2" :counter="99" label="Segundo Nombre"></v-text-field>
               <v-text-field v-model="apellido_1" :counter="99" label="Primer Apellido"></v-text-field>
               <v-text-field v-model="apellido_2" :counter="99" label="Segundo Apellido"></v-text-field>
               <v-text-field v-model="identificacion" :counter="99" label="Identificacion"></v-text-field>
               <v-text-field v-model="programa" :counter="99" label="Programa"></v-text-field>
               <v-text-field v-model="direccion" :counter="99" label="Direccion"></v-text-field>
               <v-text-field v-model="correo" :counter="99" label="Correo"></v-text-field>
            </v-layout>
            </v-flex>
         <v-flex id="id_2" xs12>
            <v-layout justify-center>
        <v-btn style="width: 30%" color="#00A052" depressed small x-large @click="crearEstudiante">Añadir Estudiante</v-btn>
        </v-layout>
        </v-flex>

    </v-layout>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                vendedores: [],
                nombre_1: '', 
                nombre_2: '',
                apellido_1: '',
                apellido_2: '',
                identificacion: '',
                programa: '',
                direccion: '',
                correo: '',
            }
        },
        methods: {
            getVendedores() {
                axios.get('http://localhost:3000/vendedor')
                    .then((response) => {
                        this.vendedores = response.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            crearEstudiante(){
                axios.post('http://localhost:3000/estudiantes',
                {
                    nombre_1: this.nombre_1,
                    nombre_2: this.nombre_2,
                    apellido_1: this.apellido_1,
                    apellido_2: this.apellido_2,
                    identificacion: this.identificacion,
                    programa: this.programa,
                    direccion: this.direccion,
                    correo: this.correo,
                })
                .then(response => {
                    this.nombre_1='',
                    this.nombre_2='',
                    this.apellido_1='',
                    this.apellido_2='',
                    this.identificacion='',
                    this.programa='',
                    this.direccion='',
                    this.correo='',
                    console.log(response.data)
                })
            }
        }

    }
    
</script>

<style scoped>
    td {
        padding: 5px;
    }

    #id_1{

        margin-top: 30px;
        font: 30px "Century Gothic";
    
    }
#id_2{
    margin-top: 30px;
    margin-bottom: 35px;
font-family: 'Century Gothic';
transition: all 0.5s;

}

#id_2:hover{
transform: scale(1.2);

}

#id_3{
    font-family: 'Century Gothic';
    text-align: center;
     background-color: #EEEEEE;
}

#id_4{
    font-family: 'Century Gothic';
    text-align: center;
}

#id_5{
    border-spacing: 14px;
    border-collapse: separate;
}

#id_6{
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 100px;
    margin-right: 100px;
 font: 10px "Century Gothic";
}

#id_7{
    background-image: url('../img.jpg');
    background-size: 100%;
    background-attachment: fixed;
}

</style>