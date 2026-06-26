/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
				'display': ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				// Brand navy — from the +EDU logo wordmark
				'navy': {
					50: '#f1f5fb',
					100: '#dde7f4',
					200: '#c0d2eb',
					300: '#93b2db',
					400: '#5f8bc6',
					500: '#3d6cb0',
					600: '#2d5494',
					700: '#264478',
					800: '#1e3560',
					900: '#14284b',
					950: '#0c1a33',
				},
				// Brand gold — from the +EDU logo swoosh
				'gold': {
					50: '#fffbeb',
					100: '#fff4c6',
					200: '#ffe888',
					300: '#ffd84a',
					400: '#fbc81b',
					500: '#ebb008',
					600: '#cb8a03',
					700: '#a26307',
					800: '#864e0d',
					900: '#724011',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow': 'glow 2.4s ease-in-out infinite alternate',
				'gradient-shift': 'gradientShift 6s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-14px)' },
				},
				glow: {
					'0%': { textShadow: '0 0 8px rgba(251, 200, 27, 0.35), 0 0 18px rgba(251, 200, 27, 0.2)' },
					'100%': { textShadow: '0 0 16px rgba(251, 200, 27, 0.65), 0 0 30px rgba(251, 200, 27, 0.4)' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				}
			},
			backdropBlur: {
				xs: '2px',
			}
		},
	},
	plugins: [],
}
