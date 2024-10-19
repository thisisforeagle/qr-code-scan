import { createRouter, createWebHistory } from "vue-router";
import BarcodeScanner from "./components/Barcode-Scanner.vue"; // Adjust the path as necessary
import GenerateQRCode from "./components/Generate-QR-Code.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
