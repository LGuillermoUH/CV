/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			't-color-1': "#181C14",
			't-color-2': "#3C3D37",
			't-color-3': "#697565",
			't-color-4': "#ECDFCC"
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
