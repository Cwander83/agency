const theme = require('./theme.json');
const tailpress = require('@jeffreyvr/tailwindcss-tailpress');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./*.php',
		'./**/*.php',
		'./resources/css/*.css',
		'./resources/js/*.js',
		'./safelist.txt',
	],
	theme: {
		container: {
			center: true,
		},

		colors: {
			primary: '#023E8A',
			secondary: '#CAF0F8',
			white: '#fff',
			black: '#000',
		},
		fontFamily: {
			heading: ['Ubuntu Condensed', 'sans-serif'],
			body: ['Poppins', 'sans-serif'],
		},
		extend: {
			fontWeight: {
				book: '300',
				regular: '400',
				medium: '500',
				'semi-bold': '600',
				bold: 'bold',
			},
			letterSpacing: {
				0: '0',
				narrow: '0.25rem',
				widest: 'max(0.5vw, 0.5rem)',
			},
			lineHeight: {
				lh0: 1.0,
				lh1: 1.1,
				lh2: 1.2,
				lh3: 1.3,
				lh4: 1.4,
				lh5: 1.5,
			},
			padding: {
				'section-vertical-sm': 'var(--padding-section-vertical-sm)',
				'section-vertical': 'var(--padding-section-vertical)',
				'section-vertical-lg': 'var(--padding-section-vertical-lg)',
				'button-vertical': '1rem',
				'button-horizontal': '1rem',
				'container-side': '2.5vw',
			},
			fontSize: {
				'body-xs': '0.75rem', // 12px
				'body-sm': '0.875rem', // 14px
				'body-base': '1rem', // 16px
				'body-base-accent': '1.125rem', // 18px
				'body-md': '1.5rem', // 24px
				'body-lg': '2rem', // 32px
				'body-lg-accent': '2.5rem', // 40px
				'body-xl': '3rem', // 48px
				'body-xxl': '3.5rem', // 56px
				'title-sm': '3.875rem', // 62px
				'title-md': '4.5rem', // 72px
				'title-lg': '5rem', // 80px
				'title-xl': '5.5rem', // 88px
				'title-xxl': '6rem', // 96px
				'display': '7rem', // 112px
			},
		},
		screens: {
			xs: '480px',
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
