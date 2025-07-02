import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

export default defineConfig({
  plugins: [tsConfigPaths()],
  build: {
      manifest: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: ({ name }: { name?: string }) => {
            const baseName = name ? path.parse(name).name : 'asset'
            return `assets/${baseName}-[hash][extname]`
          },
        },
      },
    }
  }
})
