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
				'edu-blue': {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				'edu-cyan': {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'gradient-shift': 'gradientShift 3s ease-in-out infinite',
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
					'50%': { transform: 'translateY(-10px)' },
				},
				glow: {
					'0%': { textShadow: '0 0 5px rgba(96, 165, 250, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(37, 99, 235, 0.2)' },
					'100%': { textShadow: '0 0 10px rgba(96, 165, 250, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(37, 99, 235, 0.4)' },
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
