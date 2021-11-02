<template>
    <div class="users">
    <Header/>

    <div class="container">
        <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="user_detalle" v-for="user in users" :key= "user.id" v-on:click="editar(user.id)" >
                        <th class="id_user" scope="row">{{ user.id}}</th>
                        <td class="name_user">{{user.name}}</td>
                        <td class="email_user">{{user.email}}</td>
                    </tr>
                                
                </tbody>
                </table>
                    <button type="button" class="btn_nuevo" v-on:click="nuevo()">Nuevo Usuario</button>

    </div>
    <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name: "User",

     data() {

        return {
            users:{},
            pagina:1
            
        }
    },
     components: {
        Header,
        Footer
    },
   
    
      methods: {
        
                editar(id){
                    this.$router.push('/editar/' + id);
                }, 
                nuevo(){
                    this.$router.push('/nuevo');
                }
    },

    mounted:function() {
        let direct = 'https://my-user-manager.herokuapp.com/users?page=' + this.pagina;
        axios.get(direct).then( data =>{
            this.users = data.data;
        })
        
    }, 
}
    
</script>

<style scoped>
.users{
         background-image: radial-gradient(circle at 50% -20.71%, #ffdcf4 0, #ffd3f3 12.5%, #ffc9f2 25%, #ffbff2 37.5%, #f2b5f2 50%, #e2acf3 62.5%, #d0a4f4 75%, #bc9ff6 87.5%, #a69bf8 100%);
         height: 100vh;
}

.id_user{
         border-radius: 50px ;
         background: hotpink;
         width: 2%;
         font-size: 20px;

}
.id_user:hover{
        transform: scale(2);

}
.name_user{
    font-size: 20px;

}
.name_user:hover{
        transform: scale(2);

}
.email_user{
    font-size: 20px;
}
.email_user:hover{
        transform: scale(2);

}
.btn_nuevo{
            background: hotpink;
            border: 2px  white solid;
            border-radius: 30px;
            padding: 10px;
            font-family: fantasy;
            font-size: 20px;
            cursor: pointer;
            

}
.btn_nuevo:hover{
    color: white;
    transform: scale(2);
    background: white;
    color: hotpink;
    font-weight: bold;
    border: 3px hotpink solid;

}
.user_detalle{
                font-size: 20px;
                font-family: fantasy;
                cursor: pointer;


}
.user_detalle:hover{
    color: white;
}
@media only screen and (max-width: 400px){
.users{
        width: 100%;
}

.id_user{
        border-radius: 50px ;
        background: hotpink;
        font-size: 10px;

}
.user_detalle{
              font-family: fantasy;
              font-weight: bold;
              cursor: pointer;


  }
  .email_user{
    font-size: 10px;
}
.name_user{
    font-size: 10px;
}

}

</style>