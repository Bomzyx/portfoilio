/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		color: {
			darkgreen: '#40513B',
			medium_green: '#609966',
			light_green: '#9DC08B',
			superlight_green: '#EDF1D6'
		},
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		darkTheme: 'light'
	}
};
