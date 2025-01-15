/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Usaremos la clase 'dark' para cambiar el tema
	theme: {
	  extend: {
		colors: {
		  primary: 'var(--color-primary)',
		  secondary: 'var(--color-secondary)',
		  accent: 'var(--color-accent)',
		  background: 'var(--color-background)',
		  surface: 'var(--color-surface)',
		  'text-title': 'var(--color-text-title)',
		  'text-subtitle': 'var(--color-text-subtitle)',
		  'text-body': 'var(--color-text-body)',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  