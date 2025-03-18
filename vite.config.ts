
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Use CommonJS style for Node v11 compatibility
export default defineConfig(function(config) {
  const mode = config.mode;
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base: "./kibuli-nursery-school", // This ensures assets are loaded correctly on GitHub Pages
    plugins: [
      react(),
      // Remove dynamic import for componentTagger for Node v11 compatibility
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast']
          }
        }
      }
    }
  };
});
