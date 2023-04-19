import {defineConfig} from "vite";

export default defineConfig(({command, mode, ssrBuild}) => {
    return {
        base: mode === 'development'
            ? '/'
            : 'https://llownall.github.io/NstuFun/front/dist/',
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name].js',
                    assetFileNames: 'assets/[name].[ext]',
                }
            },
        },
    }
})