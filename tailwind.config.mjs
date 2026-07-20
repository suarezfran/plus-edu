/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// High-contrast editorial serif display (matches the +EDU deck) + humanist grotesk body
				'display': ['"Playfair Display"', 'Georgia', 'serif'],
				'sans': ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				// Deep indigo — the brand's dark base (logo background #120E31)
				'ink': {
					50: '#f5f4fb',
					100: '#eae8f6',
					200: '#d2cdea',
					300: '#aaa1d6',
					400: '#7c6fbd',
					500: '#574aa1',
					600: '#423585',
					700: '#312763',
					800: '#1d1842',
					900: '#120e31',
					950: '#0a0820',
				},
				// Violet — primary accent (logo "+", right arc dot)
				'violet': {
					50: '#f5f1fe',
					100: '#ebe3fd',
					200: '#d8c9fb',
					300: '#bda2f6',
					400: '#a07cef',
					500: '#8259e1',
					600: '#6f3fd0',
					700: '#5d30b0',
					800: '#4e2c8f',
					900: '#412874',
					950: '#281553',
				},
				// Cyan — secondary accent (logo left arc, "CONSULTORA")
				'cyan': {
					50: '#ecfeff',
					100: '#cef9ff',
					200: '#a2f1fb',
					300: '#64e6f6',
					400: '#1fd5ea',
					500: '#00d5e7',
					600: '#0299ad',
					700: '#0b7a8c',
					800: '#136274',
					900: '#145163',
					950: '#073640',
				},
				// Iris — periwinkle indigo (gradient middle, mid arc)
				'iris': {
					50: '#eef0fe',
					100: '#e0e3fd',
					200: '#c8cafb',
					300: '#a6a8f6',
					400: '#8482ef',
					500: '#6a60e6',
					600: '#5848d8',
					700: '#4838bd',
					800: '#3b3198',
					900: '#342e79',
					950: '#1f1a48',
				},
				// Lavender — soft light surface tint
				'lavender': {
					50: '#faf9fe',
					100: '#f2f0fb',
					200: '#ebe9f7',
					300: '#ddd9f0',
					400: '#c7c0e6',
				},
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			boxShadow: {
				'soft': '0 2px 8px -2px rgba(18, 14, 49, 0.06), 0 12px 32px -12px rgba(18, 14, 49, 0.12)',
				'lift': '0 8px 24px -6px rgba(18, 14, 49, 0.12), 0 24px 56px -16px rgba(18, 14, 49, 0.18)',
				'glow-violet': '0 16px 48px -12px rgba(130, 89, 225, 0.5)',
			},
			animation: {
				'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'float-slow': 'floatSlow 9s ease-in-out infinite',
				'draw': 'draw 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards',
				'scroll-bob': 'scrollBob 1.8s ease-in-out infinite',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				floatSlow: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-18px)' },
				},
				draw: {
					'0%': { 'stroke-dashoffset': '1' },
					'100%': { 'stroke-dashoffset': '0' },
				},
				scrollBob: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(5px)' },
				},
			},
		},
	},
	plugins: [],
}
