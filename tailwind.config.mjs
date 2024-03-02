/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'prymary': '#006B5C',
				'secondary': '#4A635D',
			},
		},
	},
	plugins: [],
}
