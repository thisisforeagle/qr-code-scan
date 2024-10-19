import { createRouter, createWebHistory } from "vue-router";
import BarcodeScanner from "@/components/Barcode-Scanner.vue";
import GenerateQRCode from "@/components/Generate-QR-Code.vue";
import NFCScan from "@/components/NFC-Scan.vue";

const routes = [
  {
    path: "/scanner",
    name: "BarcodeScanner",
    component: BarcodeScanner,
  },
  {
    path: "/generate",
    name: "GenerateQRCode",
    component: GenerateQRCode,
  },
  {
    path: "/nfc",
    name: "NFCScan",
    component: NFCScan,
  },
];

export const router = createRouter({
  history: createWebHistory("/qr-code-scan/"),
  routes,
});
