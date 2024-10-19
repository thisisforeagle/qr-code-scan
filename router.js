import { createRouter, createWebHashHistory } from "vue-router";
import QRScanner from "@/components/QR-Scanner.vue"; // Adjust the path as necessary
import GenerateQRCode from "@/components/Generate-QR-Code.vue";
import NFCScan from "@/components/NFC-Scan.vue";

const routes = [
  {
    path: "/scanner",
    name: "Scanner",
    component: QRScanner,
  },
  {
    path: "/generate",
    name: "Generator",
    component: GenerateQRCode,
  },
  {
    path: "/nfc-scan",
    name: "NFCScan",
    component: NFCScan,
  },
  {
    path: "/",
    name: "Root",
    redirect: "/scanner",
  },
];

const router = createRouter({
  history: createWebHashHistory("/qr-code-scan/"),
  routes,
});

export default router;
