import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  kit: {
    vite: {
      optimizeDeps: {
        include: ['just-throttle', 'dayjs']
      }
    }
  },
});
