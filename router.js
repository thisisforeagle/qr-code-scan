import { createRouter, createWebHashHistory } from "vue-router";
import BarcodeScanner from "@/components/Barcode-Scanner.vue"; // Adjust the path as necessary
import GenerateQRCode from "@/components/Generate-QR-Code.vue";
import NFCScan from "@/components/NFC-Scan.vue";

const routes = [
  {
    path: "/scanner",
    name: "Scanner",
    component: BarcodeScanner,
  },
  {
    path: "/generate",
    name: "Generator",
    component: GenerateQRCode,
  },
  {
    path: "/nfc",
    name: "NFCScan",
    component: NFCScan,
  },
  {
    path: "/",
    redirect: "/scanner",
  },
];

const router = createRouter({
  history: createWebHashHistory("/qr-code-scan/"),
  routes,
});

export default router;
