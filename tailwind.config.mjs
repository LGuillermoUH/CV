/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Usaremos la clase 'dark' para cambiar el tema
	theme: {
	  extend: {
		colors: {
		  background: 'var(--color-background)',
		  border: 'var(--color-border)',
		  'button-text': 'var(--color-button-text)',
		  'button-text-inactive': 'var(--color-button-text-inactive)',
		  'button-icon': 'var(--color-button-icon)',
		  'button-icon-inactive': 'var(--color-button-icon-inactive)',
		  'button-menu-icon': 'var(--color-button-menu-icon)',
		  'primary-text': 'var(--color-primary-text)',
		  'secondary-text': 'var(--color-secondary-text)',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  