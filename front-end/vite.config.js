import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Mengizinkan akses dari jaringan lokal
    port: 5173, // Opsional, bisa diganti jika port ini sudah dipakai
  },
});
