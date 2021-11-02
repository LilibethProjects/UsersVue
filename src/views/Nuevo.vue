<template>
    <div class="nuevo">
        <Header/>
            <div >
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

                            <div class="form-group">
                                <button type="button" class="btn btn-guardar" v-on:click="guardar()">Guardar</button>
                                <button type="button" class="btn btn-salir" v-on:click="salir()">Salir</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <Footer/>

    </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name: "Nuevo",
   
      data:function(){
        return{
            form:{
                "name" : "",
                "email" : ""
            }
        }
    },
     components:{
        Header,
        Footer
    },
    methods:{
        guardar(){
            axios
            .post('https://my-user-manager.herokuapp.com/users', this.form)
            .then(data => {
                console.log(data);
                this.$router.push("/user");
            }).catch( e => {
                console.log(e);
            })
            console.log("boton funciona guardar")
        },
        salir(){
            console.log("boton funciona salir");
            this.$router.push("/user");
        },

         makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
    }
}
</script>

<style scoped>

.left{
    text-align: left;
    font-family: fantasy;
    font-size: 30px;
    font-weight: bold;

}
.nuevo{
     background-image: radial-gradient(circle at 50% -20.71%, #ffdcf4 0, #ffd3f3 12.5%, #ffc9f2 25%, #ffbff2 37.5%, #f2b5f2 50%, #e2acf3 62.5%, #d0a4f4 75%, #bc9ff6 87.5%, #a69bf8 100%);
    background-size: cover;
    height: 100vh;
}
.btn-guardar{
    margin-left: 20px;
    background: hotpink;
    font-size: 20px;
    border-radius: 50px;
    width: 100px;
    font-weight: bold;
}
.btn-salir{
    background: black;
    color: hotpink;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50px;
    width: 100px;
}

@media only screen and (max-width: 400px){
.btn-guardar{
    margin: 40px;
}    
}
</style>