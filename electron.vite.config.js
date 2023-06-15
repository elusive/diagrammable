import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        outDir: 'build',
    },
    server: {
        open: true,
        port: 4000,
    },
    main: {
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
    },
    renderer: {
        resolve: {
            alias: {
                '@renderer': resolve('src/renderer/src'),
            },
        },
        plugins: [
            react() 
    },
    define: {
        global: {},
    },
})
