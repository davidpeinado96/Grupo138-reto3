<template>


    <form class="login text-white bg-dark mt-3 mb-3" style="width:20rem;" >
      <div class="form-group  mt-3 ml-3 mr-3">
        <label for="exampleInputEmail1">Email address</label>
        <input 
          v-model="login.email"
          type="email"
          class="form-control display:flex whidth:50px;  "
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group ml-3 mr-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="login.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />

        <!-- <pre>

            {{ login }}

        </pre> -->
      </div>
      <div class="botonlogin">
      <button @click.prevent="loginUser" type="submit" class="btn btn-success mt-5 mb-3">
        Login
      </button>
      </div>
      <div class="botonRegister mb-3">
      <button type="button" class="btn btn-primary">Register</button>
      </div>
    </form>
  
</template>


<script>

import swal from 'sweetalert';

export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login); // user para conectar con backend

        let token = response.data.accessToken;
        let user = response.data.user;

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (token) {

          swal("Éxito!!", "Login correcto", "success");
          this.$router.push("/home");
        }
      } catch (e) {

        swal("Oops!", "Algo salió mal!", "error");
        /* console.log(err.response); */
      }
    },
  },
};
</script>