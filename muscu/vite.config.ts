import {defineConfig} from 'vite'
import {devtools} from '@tanstack/devtools-vite'

import {tanstackRouter} from '@tanstack/router-plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
    resolve: {tsconfigPaths: true},
    plugins: [
        devtools(),
        tailwindcss(),
        tanstackRouter({target: 'react', autoCodeSplitting: true}),
        viteReact(),
    ],
    base: '/muscu',
    server: {
        allowedHosts: ["localhost:80"]
    }
})

export default config
