<template>

<div class="editar">
    <Header/>
    <div class="container">
        <form action="" class="form-horizontal">
            <div class="form-group left">
                <label for="" class="control-label col-sm-2">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="name" id="name" v-model="form.name">
                </div>
                 <div class="form-group left">
                <label for="" class="control-label col-sm-2">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                </div>
                </div>

                <div class="form-group btn-botones" >
                    <button type="button" class="btn btn-editar" v-on:click="editar()">Editar</button>
                    <button type="button" class="btn btn-eliminar" v-on:click="eliminar()">Eliminar</button>
                    <button type="button" class="btn btn-salir" v-on:click="salir()">Salir</button>
                </div>
            </div>
        </form>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';



export default {
    name :"Editar",

    components:{
        Header,
        Footer
    },
    data:function(){
        return{
            form:{
                "id" : "",
                "name" : "",
                "email" : ""
            }
        }
    },
     methods:{
        editar(){
            console.log("editar", this.form.id);
            axios
            .put(`https://my-user-manager.herokuapp.com/users/${ this.form.id}`,
            {
                name: this.form.name,
                email: this.form.email
            })
            .then( data => {
                console.log(data);
                console.log("data");
                                
                this.$router.push("/user");

            });
        },
        salir(){
            this.$router.push("/user");
        },
        eliminar(){
            var enviar = {
                "id" : this.form.id

            };
            axios

            .delete(`https://my-user-manager.herokuapp.com/users/${ this.form.id}`, { headers : enviar})
            .then( datos => {
                console.log("llega aqui");

                console.log(datos);
                this.$router.push("/user");

            });

        }
    },

        mounted: function(){
        this.form.id = this.$route.params.id;
                console.log("mounted", this.form.id);

        axios
        .get("https://my-user-manager.herokuapp.com/users?id="+ this.form.id)
        .then( datos => {
            var users = datos.data;

            users.forEach(user => {
                if(user.id == this.form.id){        
                console.log("entro aqui");

                this.form.name = user.name;
                console.log("correcto se accedio");
                this.form.email = user.email;

                }
                
            });
            

    })
      .catch(error => console.log(error))

},
   


}
</script>

<style scoped>

.editar{
    background-image: radial-gradient(circle at 50% -20.71%, #ffdcf4 0, #ffd3f3 12.5%, #ffc9f2 25%, #ffbff2 37.5%, #f2b5f2 50%, #e2acf3 62.5%, #d0a4f4 75%, #bc9ff6 87.5%, #a69bf8 100%);
    height: 100vh;
}
.left{
    text-align: left;
    font-family: fantasy;
    font-size: 30px;
    font-weight: bold;

}
button{
    border-radius: 20px;
    padding: 5px;
    margin: 10px;
}
.danger{
    background: red;
}

.btn-editar{
            width: 100px;
            background: white;
            border: 2px hotpink solid;
            color: black;
            font-size: 20px;
            font-weight: bold;

}
.btn-eliminar{
            width: 100px;
            background: hotpink;
            border: 2px black solid;
            color: white;
            font-size: 20px;
            font-weight: bold;

}
.btn-salir{
            width: 100px;
            background: black;
            border: 2px black solid;
            color: hotpink;
            font-size: 20px;
            font-weight: bold;

}

@media only screen and (max-width: 400px){
.btn-editar{
            width: 85px;
            background: white;
            border: 2px hotpink solid;
            color: black;
            font-size: 20px;
            font-weight: bold;

}
.btn-eliminar{
            width: 85px;
            background: hotpink;
            border: 2px black solid;
            color: white;
            font-size: 20px;
            font-weight: bold;

}
.btn-salir{
            width: 85px;
            background: black;
            border: 2px black solid;
            color: hotpink;
            font-size: 20px;
            font-weight: bold;

}


}
</style>