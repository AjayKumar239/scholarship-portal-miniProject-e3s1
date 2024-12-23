// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api/v1": {
//         target: "http://localhost:3000",
//         secure: false,
//       },
//       "/google-image": {
//         target: "https://lh3.googleusercontent.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/google-image/, ""),
//       },
//     },
//   },
//   plugins: [react()],
// });



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/api": {
        target: "http://localhost:3000", // Backend server for officer API
        secure: false,
      },
      "/google-image": {
        target: "https://lh3.googleusercontent.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/google-image/, ""),
      },
    },
  },
  plugins: [react()],
  
});

