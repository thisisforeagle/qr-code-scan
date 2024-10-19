<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue Barcode Scanner</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link btn"
              activeClass="btn-primary"
              linkExactActiveClass="btn-secondary"
              to="/scanner"
              >Scan QR</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link btn"
              activeClass="btn-primary"
              linkExactActiveClass="btn-secondary"
              to="/generate"
              >Generate QR</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link btn"
              activeClass="btn-primary"
              linkExactActiveClass="btn-secondary"
              to="/nfc-scan"
              >Scan NFC</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav-bar",
  };
</script>

<style scoped lang="scss">
  .nav-link {
    width: 150px;
    margin-right: 10px;
    border: 1px solid #007bff;
    color: #007bff !important ;
    &.router-link-exact-active {
      font-weight: bold;
      text-decoration: underline;
      color: white !important;
    }
  }
</style>
