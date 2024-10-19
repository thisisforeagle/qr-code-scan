<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "@/components/Nav-Bar.vue";
  export default {
    components: {
      NavBar,
    },
  };
</script>

<style>
  /* Add any global styles you need */
  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav li {
    display: inline;
    margin-right: 10px;
  }

  nav a {
    text-decoration: none;
    color: #42b983;
  }

  nav a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
