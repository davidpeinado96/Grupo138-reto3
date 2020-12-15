<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
          <button
            class="btn btn-danger my-2 my-sm-0 ml-3"
            type="button"
            @click="logOut"
          >
            Salir
          </button>
        </form>
      </div>
    </nav>

    <div>
      <div class="d-flex justify-content-center bg-secondary">
        <div class="jumbotron mt-3 ">

            <div>
          <h1 class="display-4">Bienvenid@! {{ user.name }}</h1>
          <p class="lead">
            Te invitamos a que completes tu perfil con algunos datos basicos ,
            solo tomará unos cuantos minutos.
          </p>
          <hr class="my-4 " />
          </div>

          <div class="usuario row justify-content-around">

          <div class="card text-white bg-dark mb-5  " style="max-width: 500px">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src='../assets/user.jpg'
                  width="200px"
                  height="200px"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Usuario</h5>
                  <p class="card-text">{{ user.name }}</p>
                  <p class="card-text">{{ user.email }}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          </div>

          <p>
            Es importante que completes tu perfil asi podremos mostrarte contenido personalizado basado en tus preferencias.
          </p>
          <a class="btn btn-success btn-lg " href="#" role="button"
            >Vale entendido</a
          >
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");

      if (token) {
        this.user = JSON.parse(user);
      }
    },

    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>