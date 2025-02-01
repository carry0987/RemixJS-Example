import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
    // Load environment variables based on the mode (e.g. development, production)
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            host: '127.0.0.1',
            port: Number(env.PORT) || 3000,
            strictPort: true
        },
        define: {
            'process.env': process.env
        },
        plugins: [
            remix({
                basename: '/',
                buildDirectory: 'build',
                serverBuildFile: 'index.js',
                future: {
                    v3_fetcherPersist: true,
                    v3_relativeSplatPath: true,
                    v3_throwAbortReason: true,
                    v3_lazyRouteDiscovery: true,
                    v3_singleFetch: true
                },
                serverModuleFormat: 'esm'
            }),
            tsconfigPaths()
        ]
    };
});
