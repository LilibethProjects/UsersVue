<template>
<html>
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
<div class="container">
  <router-link to="/user">
  <h1>BIEVENIDO A MI SITIO WEB</h1><br><br>
  <button class="btn_inicio" >ACCEDER</button>

  </router-link>
  <router-view/>
	
</div>
</body>
</html>
 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
body{
    background-image: radial-gradient(circle at 50% -20.71%, #ffdcf4 0, #ffd3f3 12.5%, #ffc9f2 25%, #ffbff2 37.5%, #f2b5f2 50%, #e2acf3 62.5%, #d0a4f4 75%, #bc9ff6 87.5%, #a69bf8 100%);
    background-size: cover;
    height: 100vh;

}

.btn_inicio{
            text-align: center;
            font-size: 50px;
            color: white;
            background: hotpink;
            border-radius: 50px ;
            cursor: pointer;
            font-family: fantasy;
            font-weight: bold;
            border: 5px  white solid;
            margin-left: 200px; 
}

.btn_inicio:hover{
              transform: scale(2);
              background: black;
              color: hotpink;
              border: 3px hotpink solid;
              border-radius: 30px;

}
.container{
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
     text-align: center;
     color: hotpink;
     font-family: fantasy;
     font-weight: bold;
     font-size: 50px;

   }

h1 {
  animation-duration: 3s;
  animation-name: slidein;
}
h1:hover{
  text-decoration: underline;
  text-decoration-color: black;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
@media only screen and (max-width: 400px){
  .btn_inicio{
            background: hotpink;
            font-size: 40px;
            margin-left: 50px;
  
   }
   h1{
     text-align: center;
     color: hotpink;
     font-family: fantasy;
     font-weight: bold;

   }
}
</style>
