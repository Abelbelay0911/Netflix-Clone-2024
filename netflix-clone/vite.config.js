import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react'
//  plugins: [react()]
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // ... other Vite config
    plugins: [react()],
    define: {
      "process.env": env,
      base: "Netflix-Clone-2024/netflix-clone/",
    },
  };
});
