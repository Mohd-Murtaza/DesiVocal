// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://ai.google.dev',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//         configure: (proxy) => {
//           proxy.on('error', (err, req, res) => {
//             res.writeHead(500, {
//               'Content-Type': 'text/plain',
//             });
//             res.end('Something went wrong. And we are reporting a custom error message.');
//           });
//         },
//       },
//     },
//   },
// });





import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ai.google.dev',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Add headers or other modifications to the request here
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Handle responses, including redirection handling
            if (proxyRes.statusCode === 302) {
              const location = proxyRes.headers.location;
              res.writeHead(302, {
                Location: location,
              });
              res.end();
            }
          });
          proxy.on('error', (err, req, res) => {
            res.writeHead(500, {
              'Content-Type': 'text/plain',
            });
            res.end('Something went wrong. And we are reporting a custom error message.');
          });
        },
      },
    },
  },
});