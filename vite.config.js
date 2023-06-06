import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import electron from 'vite-plugin-electron';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [
        react(),
        // svgr options: https://react-svgr.com/docs/options/
        svgr({ svgrOptions: { icon: true } }),
         electron({
            main: {
                entry: 'public/electron.js',
                vite: {
                    build: {
                        outDir: 'dist/electron.js',
                    }
                },
            },
            preload: {
              //  input: {
                    // You can configure multiple preload scripts here
              //      index: path.join(__dirname, 'electron/preload/index.js'),
              //   },
              //  vite: {
              //      build: {
              //          outDir: 'dist/electron/preload',
              //      }
              //  },
            },

            // Enables use of Node.js API in the Electron-Renderer
            renderer: {},
        }),
    ]};
});
