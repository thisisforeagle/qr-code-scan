<template>
  <div>
    <h1>NFC Scan</h1>
    <button @click="startScan">Start NFC Scan</button>
    <div v-if="nfcData">
      <h2>Scanned NFC Data:</h2>
      <pre>{{ nfcData }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const nfcData = ref(null);
      const error = ref(null);

      const startScan = async () => {
        error.value = null; // Reset error before starting a new scan
        if ("NDEFReader" in window) {
          try {
            const ndef = new NDEFReader();
            await ndef.scan();
            console.log("Scan started successfully.");
            ndef.onreading = (event) => {
              const decoder = new TextDecoder();
              let data = "";
              for (const record of event.message.records) {
                data += `Record type: ${record.recordType}\n`;
                data += `MIME type: ${record.mediaType}\n`;
                data += `Record id: ${record.id}\n`;
                data += `Record data: ${decoder.decode(record.data)}\n\n`;
              }
              nfcData.value = data;
            };
            ndef.onerror = (event) => {
              error.value = `Error reading NFC tag: ${event.message}`;
              console.log(`Error reading NFC tag: ${event.message}`);
            };
          } catch (err) {
            error.value = `Error! Scan failed to start: ${err.message}`;
            console.log(`Error! Scan failed to start: ${err.message}`);
          }
        } else {
          error.value = "Web NFC is not supported in this browser.";
          console.log("Web NFC is not supported in this browser.");
        }
      };

      return {
        nfcData,
        error,
        startScan,
      };
    },
  };
</script>

<style scoped>
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }
</style>
