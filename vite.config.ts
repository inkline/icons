import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

function myPlugin() {
    const virtualFileId = '@my-virtual-file'

    return {
        name: 'my-plugin',
        resolveId(id: string) {
            console.log(id);
            if (/\.ts$/.test(id)) {
                console.log(id);
                return virtualFileId
            }
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        myPlugin()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src', 'plugin.ts'),
            name: 'InklineIcons'
        },
        emptyOutDir: false,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                exports: 'named',
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
