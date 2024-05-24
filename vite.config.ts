import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
	plugins: [, sveltekit(), topLevelAwait(), wasm()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
