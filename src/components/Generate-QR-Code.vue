<script setup>
  import { ref } from "vue";
  import { useQRCode } from "@vueuse/integrations/useQRCode";

  const text = ref("https://vueuse.org");
  const qrcode = useQRCode(text, {
    errorCorrectionLevel: "H",
    margin: 3,
  });
</script>

<template>
  <div class="mx-3 my-5">
    <p>Text content for QRCode</p>
    <input v-model="text" type="text" />
    <img
      v-if="text"
      class="mt-6 mb-2 rounded border"
      :src="qrcode"
      alt="QR Code"
    />
  </div>
</template>
