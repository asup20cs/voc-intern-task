import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({
		// ...
		onwarn: (warning, handler) => {
		  // Disable all a11y warnings
		  if (warning.code.startsWith('a11y-')) return;
		  handler(warning);
		},
	  })]
});
