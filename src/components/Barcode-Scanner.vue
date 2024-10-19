<template>
  <div>
    <qrcode-stream
      @detect="onDetect"
      @decode="onDecode"
      @init="onInit"
    ></qrcode-stream>
    <div>
      <h3>Decoded Content:</h3>
      <p>{{ decodedContent }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { QrcodeStream } from "vue-qrcode-reader";

  const decodedContent = ref(null);

  function onDecode(content) {
    decodedContent.value = content;
  }

  function onDetect(content) {
    console.log(content);
    decodedContent.value = content;
    if (content[0]?.rawValue) {
      decodedContent.value = content[0].rawValue;
    }
  }

  function onInit(promise) {
    promise.catch((error) => {
      if (error.name === "NotAllowedError") {
        alert("Hey! I need access to your camera");
      } else if (error.name === "NotFoundError") {
        alert("Do you even have a camera on your device?");
      } else if (error.name === "NotSupportedError") {
        alert(
          "Seems like this page is served in non-secure context (HTTPS, localhost or file://)"
        );
      } else if (error.name === "NotReadableError") {
        alert("Couldn't access your camera. Is it already in use?");
      } else {
        alert("UNKNOWN ERROR: " + error.message);
      }
    });
  }
</script>

<style scoped>
  /* Add any styles you need here */
</style>
