<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/scanner">Barcode Scanner</router-link></li>
        <li><router-link to="/generate">Generate QR Code</router-link></li>
        <li><router-link to="/nfc-scan">NFC Scan</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
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
</style>
