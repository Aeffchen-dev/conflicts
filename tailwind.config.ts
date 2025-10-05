import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'kokoro': ['Kokoro', 'serif'],
				'schoolbell': ['Schoolbell', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				quiz: {
					primary: 'hsl(var(--quiz-primary))',
					accent: 'hsl(var(--quiz-accent))',
					'category-bg': 'hsl(var(--quiz-category-bg))',
					'category-text': 'hsl(var(--quiz-category-text))',
					background: 'hsl(var(--quiz-background))',
					surface: 'hsl(var(--quiz-surface))',
					'category1-bg': 'hsl(var(--quiz-category1-bg))',
					'category1-text': 'hsl(var(--quiz-category1-text))',
					'category2-bg': 'hsl(var(--quiz-category2-bg))',
					'category2-text': 'hsl(var(--quiz-category2-text))',
					'category3-bg': 'hsl(var(--quiz-category3-bg))',
					'category3-text': 'hsl(var(--quiz-category3-text))',
					'category4-bg': 'hsl(var(--quiz-category4-bg))',
					'category4-text': 'hsl(var(--quiz-category4-text))',
					'category5-bg': 'hsl(var(--quiz-category5-bg))',
					'category5-text': 'hsl(var(--quiz-category5-text))',
					'category6-bg': 'hsl(var(--quiz-category6-bg))',
					'category6-text': 'hsl(var(--quiz-category6-text))',
					'werte-bg': 'hsl(var(--quiz-werte-bg))',
					'werte-text': 'hsl(var(--quiz-werte-text))',
					'bedürfnisse-bg': 'hsl(var(--quiz-bedürfnisse-bg))',
					'bedürfnisse-text': 'hsl(var(--quiz-bedürfnisse-text))',
					'kommunikation-bg': 'hsl(var(--quiz-kommunikation-bg))',
					'kommunikation-text': 'hsl(var(--quiz-kommunikation-text))',
					'motivation-bg': 'hsl(var(--quiz-motivation-bg))',
					'motivation-text': 'hsl(var(--quiz-motivation-text))',
					'grenzen-bg': 'hsl(var(--quiz-grenzen-bg))',
					'grenzen-text': 'hsl(var(--quiz-grenzen-text))',
					'vision-bg': 'hsl(var(--quiz-vision-bg))',
					'vision-text': 'hsl(var(--quiz-vision-text))',
					'no-go-bg': 'hsl(var(--quiz-no-go-bg))',
					'no-go-text': 'hsl(var(--quiz-no-go-text))',
					'risiko-bg': 'hsl(var(--quiz-risiko-bg))',
					'risiko-text': 'hsl(var(--quiz-risiko-text))',
					'regeln-bg': 'hsl(var(--quiz-regeln-bg))',
					'regeln-text': 'hsl(var(--quiz-regeln-text))',
					'info-bg': 'hsl(var(--quiz-info-bg))',
					'info-text': 'hsl(var(--quiz-info-text))',
					'reflexion-bg': 'hsl(var(--quiz-reflexion-bg))',
					'reflexion-text': 'hsl(var(--quiz-reflexion-text))',
					'bindung-bg': 'hsl(var(--quiz-bindung-bg))',
					'bindung-text': 'hsl(var(--quiz-bindung-text))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-surface': 'var(--gradient-surface)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'quick': 'var(--transition-quick)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'wave-border-1': {
					'0%': { borderRadius: '58% 42% 56% 44% / 48% 54% 46% 52%' },
					'10%': { borderRadius: '53% 47% 49% 51% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '51% 49% 45% 55% / 54% 46% 54% 46%' },
					'30%': { borderRadius: '46% 54% 51% 49% / 55% 45% 55% 45%' },
					'40%': { borderRadius: '49% 51% 54% 46% / 48% 52% 48% 52%' },
					'50%': { borderRadius: '52% 48% 50% 50% / 46% 54% 46% 54%' },
					'60%': { borderRadius: '54% 46% 48% 52% / 50% 50% 50% 50%' },
					'70%': { borderRadius: '50% 50% 52% 48% / 53% 47% 53% 47%' },
					'80%': { borderRadius: '48% 52% 55% 45% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '52% 48% 47% 53% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '58% 42% 56% 44% / 48% 54% 46% 52%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '52% 48% 53% 47% / 51% 49% 51% 49%' },
					'10%': { borderRadius: '50% 50% 51% 49% / 49% 51% 49% 51%' },
					'20%': { borderRadius: '48% 52% 50% 50% / 50% 50% 50% 50%' },
					'30%': { borderRadius: '51% 49% 48% 52% / 52% 48% 52% 48%' },
					'40%': { borderRadius: '49% 51% 52% 48% / 51% 49% 51% 49%' },
					'50%': { borderRadius: '52% 48% 49% 51% / 48% 52% 48% 52%' },
					'60%': { borderRadius: '50% 50% 51% 49% / 49% 51% 49% 51%' },
					'70%': { borderRadius: '49% 51% 50% 50% / 50% 50% 50% 50%' },
					'80%': { borderRadius: '51% 49% 52% 48% / 52% 48% 52% 48%' },
					'90%': { borderRadius: '50% 50% 48% 52% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '52% 48% 53% 47% / 51% 49% 51% 49%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '53% 47% 52% 48% / 50% 50% 50% 50%' },
					'10%': { borderRadius: '51% 49% 50% 50% / 51% 49% 51% 49%' },
					'20%': { borderRadius: '50% 50% 51% 49% / 49% 51% 49% 51%' },
					'30%': { borderRadius: '49% 51% 52% 48% / 50% 50% 50% 50%' },
					'40%': { borderRadius: '51% 49% 50% 50% / 52% 48% 52% 48%' },
					'50%': { borderRadius: '50% 50% 49% 51% / 51% 49% 51% 49%' },
					'60%': { borderRadius: '52% 48% 51% 49% / 50% 50% 50% 50%' },
					'70%': { borderRadius: '51% 49% 50% 50% / 49% 51% 49% 51%' },
					'80%': { borderRadius: '50% 50% 52% 48% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '49% 51% 51% 49% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '53% 47% 52% 48% / 50% 50% 50% 50%' }
				},
				'wave-border-4': {
					'0%': { borderRadius: '55% 45% 54% 46% / 52% 48% 52% 48%' },
					'10%': { borderRadius: '52% 48% 50% 50% / 50% 50% 50% 50%' },
					'20%': { borderRadius: '49% 51% 48% 52% / 51% 49% 51% 49%' },
					'30%': { borderRadius: '47% 53% 52% 48% / 53% 47% 53% 47%' },
					'40%': { borderRadius: '50% 50% 54% 46% / 49% 51% 49% 51%' },
					'50%': { borderRadius: '53% 47% 51% 49% / 47% 53% 47% 53%' },
					'60%': { borderRadius: '51% 49% 49% 51% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '49% 51% 52% 48% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '52% 48% 50% 50% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '50% 50% 53% 47% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '55% 45% 54% 46% / 52% 48% 52% 48%' }
				},
				'wave-border-5': {
					'0%': { borderRadius: '47% 53% 56% 44% / 54% 46% 54% 46%' },
					'10%': { borderRadius: '52% 48% 52% 48% / 49% 51% 49% 51%' },
					'20%': { borderRadius: '54% 46% 49% 51% / 47% 53% 47% 53%' },
					'30%': { borderRadius: '50% 50% 51% 49% / 52% 48% 52% 48%' },
					'40%': { borderRadius: '48% 52% 53% 47% / 50% 50% 50% 50%' },
					'50%': { borderRadius: '51% 49% 50% 50% / 48% 52% 48% 52%' },
					'60%': { borderRadius: '53% 47% 48% 52% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '50% 50% 52% 48% / 53% 47% 53% 47%' },
					'80%': { borderRadius: '49% 51% 54% 46% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '51% 49% 51% 49% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '47% 53% 56% 44% / 54% 46% 54% 46%' }
				},
				'wave-border-6': {
					'0%': { borderRadius: '56% 44% 48% 52% / 50% 53% 47% 50%' },
					'10%': { borderRadius: '52% 48% 52% 48% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '49% 51% 54% 46% / 54% 46% 54% 46%' },
					'30%': { borderRadius: '47% 53% 51% 49% / 51% 49% 51% 49%' },
					'40%': { borderRadius: '50% 50% 49% 51% / 49% 51% 49% 51%' },
					'50%': { borderRadius: '53% 47% 52% 48% / 47% 53% 47% 53%' },
					'60%': { borderRadius: '51% 49% 50% 50% / 50% 50% 50% 50%' },
					'70%': { borderRadius: '49% 51% 51% 49% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '52% 48% 53% 47% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
					'100%': { borderRadius: '56% 44% 48% 52% / 50% 53% 47% 50%' }
				},
				'wave-border-7': {
					'0%': { borderRadius: '46% 54% 56% 44% / 56% 47% 53% 44%' },
					'10%': { borderRadius: '52% 48% 52% 48% / 51% 49% 51% 49%' },
					'20%': { borderRadius: '54% 46% 49% 51% / 48% 52% 48% 52%' },
					'30%': { borderRadius: '50% 50% 51% 49% / 52% 48% 52% 48%' },
					'40%': { borderRadius: '48% 52% 53% 47% / 50% 50% 50% 50%' },
					'50%': { borderRadius: '51% 49% 50% 50% / 47% 53% 47% 53%' },
					'60%': { borderRadius: '53% 47% 48% 52% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '50% 50% 52% 48% / 53% 47% 53% 47%' },
					'80%': { borderRadius: '49% 51% 54% 46% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '51% 49% 51% 49% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '46% 54% 56% 44% / 56% 47% 53% 44%' }
				},
				'wave-border-8': {
					'0%': { borderRadius: '55% 45% 55% 45% / 48% 54% 46% 52%' },
					'10%': { borderRadius: '51% 49% 51% 49% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '48% 52% 49% 51% / 54% 46% 54% 46%' },
					'30%': { borderRadius: '50% 50% 52% 48% / 50% 50% 50% 50%' },
					'40%': { borderRadius: '52% 48% 50% 50% / 48% 52% 48% 52%' },
					'50%': { borderRadius: '49% 51% 51% 49% / 51% 49% 51% 49%' },
					'60%': { borderRadius: '51% 49% 53% 47% / 49% 51% 49% 51%' },
					'70%': { borderRadius: '53% 47% 50% 50% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '50% 50% 48% 52% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '52% 48% 51% 49% / 50% 50% 50% 50%' },
					'100%': { borderRadius: '55% 45% 55% 45% / 48% 54% 46% 52%' }
				},
				'wave-border-9': {
					'0%': { borderRadius: '49% 51% 55% 45% / 56% 49% 51% 44%' },
					'10%': { borderRadius: '53% 47% 52% 48% / 50% 52% 48% 50%' },
					'20%': { borderRadius: '54% 46% 50% 50% / 48% 54% 46% 52%' },
					'30%': { borderRadius: '51% 49% 48% 52% / 51% 50% 50% 49%' },
					'40%': { borderRadius: '48% 52% 51% 49% / 53% 48% 52% 47%' },
					'50%': { borderRadius: '50% 50% 53% 47% / 50% 51% 49% 50%' },
					'60%': { borderRadius: '52% 48% 50% 50% / 49% 52% 48% 51%' },
					'70%': { borderRadius: '51% 49% 52% 48% / 51% 50% 50% 49%' },
					'80%': { borderRadius: '50% 50% 51% 49% / 52% 49% 51% 48%' },
					'90%': { borderRadius: '52% 48% 53% 47% / 50% 51% 49% 50%' },
					'100%': { borderRadius: '49% 51% 55% 45% / 56% 49% 51% 44%' }
				},
				'wave-border-10': {
					'0%': { borderRadius: '57% 43% 53% 47% / 52% 48% 52% 48%' },
					'10%': { borderRadius: '52% 48% 49% 51% / 49% 52% 48% 51%' },
					'20%': { borderRadius: '48% 52% 48% 52% / 48% 54% 46% 52%' },
					'30%': { borderRadius: '45% 55% 51% 49% / 50% 50% 50% 50%' },
					'40%': { borderRadius: '49% 51% 53% 47% / 52% 48% 52% 48%' },
					'50%': { borderRadius: '52% 48% 50% 50% / 49% 51% 49% 51%' },
					'60%': { borderRadius: '54% 46% 49% 51% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '50% 50% 52% 48% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '49% 51% 54% 46% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '51% 49% 51% 49% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '57% 43% 53% 47% / 52% 48% 52% 48%' }
				},
				'wave-border-11': {
					'0%': { borderRadius: '45% 55% 57% 43% / 54% 46% 54% 46%' },
					'10%': { borderRadius: '51% 49% 53% 47% / 49% 51% 49% 51%' },
					'20%': { borderRadius: '54% 46% 50% 50% / 47% 53% 47% 53%' },
					'30%': { borderRadius: '50% 50% 49% 51% / 51% 49% 51% 49%' },
					'40%': { borderRadius: '48% 52% 52% 48% / 53% 47% 53% 47%' },
					'50%': { borderRadius: '51% 49% 50% 50% / 50% 50% 50% 50%' },
					'60%': { borderRadius: '53% 47% 51% 49% / 48% 52% 48% 52%' },
					'70%': { borderRadius: '50% 50% 53% 47% / 51% 49% 51% 49%' },
					'80%': { borderRadius: '49% 51% 50% 50% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '52% 48% 51% 49% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '45% 55% 57% 43% / 54% 46% 54% 46%' }
				},
				'wave-border-12': {
					'0%': { borderRadius: '53% 47% 49% 51% / 50% 54% 46% 50%' },
					'10%': { borderRadius: '49% 51% 52% 48% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '47% 53% 54% 46% / 54% 47% 53% 46%' },
					'30%': { borderRadius: '50% 50% 51% 49% / 51% 50% 50% 49%' },
					'40%': { borderRadius: '52% 48% 50% 50% / 49% 52% 48% 51%' },
					'50%': { borderRadius: '51% 49% 49% 51% / 50% 50% 50% 50%' },
					'60%': { borderRadius: '49% 51% 52% 48% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '51% 49% 50% 50% / 51% 49% 51% 49%' },
					'80%': { borderRadius: '52% 48% 51% 49% / 50% 51% 49% 50%' },
					'90%': { borderRadius: '50% 50% 52% 48% / 49% 50% 50% 51%' },
					'100%': { borderRadius: '53% 47% 49% 51% / 50% 54% 46% 50%' }
				},
				'wave-border-13': {
					'0%': { borderRadius: '58% 42% 45% 55% / 47% 53% 47% 53%' },
					'10%': { borderRadius: '53% 47% 51% 49% / 51% 49% 51% 49%' },
					'20%': { borderRadius: '50% 50% 53% 47% / 53% 47% 53% 47%' },
					'30%': { borderRadius: '47% 53% 50% 50% / 50% 50% 50% 50%' },
					'40%': { borderRadius: '44% 56% 52% 48% / 49% 51% 49% 51%' },
					'50%': { borderRadius: '50% 50% 50% 50% / 51% 49% 51% 49%' },
					'60%': { borderRadius: '53% 47% 49% 51% / 49% 52% 48% 51%' },
					'70%': { borderRadius: '51% 49% 51% 49% / 50% 50% 50% 50%' },
					'80%': { borderRadius: '54% 46% 53% 47% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '51% 49% 50% 50% / 50% 50% 50% 50%' },
					'100%': { borderRadius: '58% 42% 45% 55% / 47% 53% 47% 53%' }
				},
				'wave-border-14': {
					'0%': { borderRadius: '44% 56% 53% 47% / 56% 44% 56% 44%' },
					'10%': { borderRadius: '50% 50% 50% 50% / 51% 50% 50% 49%' },
					'20%': { borderRadius: '53% 47% 49% 51% / 49% 53% 47% 51%' },
					'30%': { borderRadius: '56% 44% 51% 49% / 46% 56% 44% 54%' },
					'40%': { borderRadius: '51% 49% 53% 47% / 50% 51% 49% 50%' },
					'50%': { borderRadius: '48% 52% 50% 50% / 52% 48% 52% 48%' },
					'60%': { borderRadius: '50% 50% 52% 48% / 51% 47% 53% 49%' },
					'70%': { borderRadius: '52% 48% 51% 49% / 49% 51% 49% 51%' },
					'80%': { borderRadius: '50% 50% 48% 52% / 53% 48% 52% 47%' },
					'90%': { borderRadius: '51% 49% 50% 50% / 50% 50% 50% 50%' },
					'100%': { borderRadius: '44% 56% 53% 47% / 56% 44% 56% 44%' }
				},
				'wave-border-15': {
					'0%': { borderRadius: '49% 51% 57% 43% / 53% 49% 51% 47%' },
					'10%': { borderRadius: '54% 46% 53% 47% / 48% 52% 48% 52%' },
					'20%': { borderRadius: '53% 47% 50% 50% / 47% 54% 46% 53%' },
					'30%': { borderRadius: '50% 50% 49% 51% / 50% 51% 49% 50%' },
					'40%': { borderRadius: '48% 52% 51% 49% / 52% 49% 51% 48%' },
					'50%': { borderRadius: '46% 54% 52% 48% / 50% 50% 50% 50%' },
					'60%': { borderRadius: '50% 50% 50% 50% / 49% 52% 48% 51%' },
					'70%': { borderRadius: '52% 48% 51% 49% / 51% 50% 50% 49%' },
					'80%': { borderRadius: '51% 49% 53% 47% / 50% 51% 49% 50%' },
					'90%': { borderRadius: '50% 50% 51% 49% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '49% 51% 57% 43% / 53% 49% 51% 47%' }
				},
				'wave-border-16': {
					'0%': { borderRadius: '56% 44% 49% 51% / 54% 47% 53% 46%' },
					'10%': { borderRadius: '51% 49% 52% 48% / 48% 53% 47% 52%' },
					'20%': { borderRadius: '48% 52% 54% 46% / 47% 54% 46% 53%' },
					'30%': { borderRadius: '50% 50% 51% 49% / 51% 50% 50% 49%' },
					'40%': { borderRadius: '47% 53% 50% 50% / 52% 49% 51% 48%' },
					'50%': { borderRadius: '51% 49% 49% 51% / 50% 51% 49% 50%' },
					'60%': { borderRadius: '53% 47% 51% 49% / 49% 52% 48% 51%' },
					'70%': { borderRadius: '51% 49% 52% 48% / 51% 49% 51% 49%' },
					'80%': { borderRadius: '50% 50% 53% 47% / 48% 51% 49% 52%' },
					'90%': { borderRadius: '52% 48% 50% 50% / 50% 50% 50% 50%' },
					'100%': { borderRadius: '56% 44% 49% 51% / 54% 47% 53% 46%' }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(calc(-100% - 16px))', opacity: '1' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(calc(100% + 16px))', opacity: '1' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-out-left': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(calc(-100% - 16px))', opacity: '1' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(calc(100% + 16px))', opacity: '1' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(280 100% 70% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(280 100% 70% / 0.6)' }
				}
			},
			animation: {
				'wave-border-1': 'wave-border-1 14s ease-in-out infinite',
				'wave-border-2': 'wave-border-2 16s ease-in-out infinite',
				'wave-border-3': 'wave-border-3 13s ease-in-out infinite',
				'wave-border-4': 'wave-border-4 17s ease-in-out infinite',
				'wave-border-5': 'wave-border-5 15s ease-in-out infinite',
				'wave-border-6': 'wave-border-6 16.5s ease-in-out infinite',
				'wave-border-7': 'wave-border-7 14.5s ease-in-out infinite',
				'wave-border-8': 'wave-border-8 17.5s ease-in-out infinite',
				'wave-border-9': 'wave-border-9 14s ease-in-out infinite',
				'wave-border-10': 'wave-border-10 15.5s ease-in-out infinite',
				'wave-border-11': 'wave-border-11 13.5s ease-in-out infinite',
				'wave-border-12': 'wave-border-12 17s ease-in-out infinite',
				'wave-border-13': 'wave-border-13 15s ease-in-out infinite',
				'wave-border-14': 'wave-border-14 16.5s ease-in-out infinite',
				'wave-border-15': 'wave-border-15 13s ease-in-out infinite',
				'wave-border-16': 'wave-border-16 17.5s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-in-out',
				'slide-in-right': 'slide-in-right 0.3s ease-in-out',
				'slide-out-left': 'slide-out-left 0.3s ease-in-out',
				'slide-out-right': 'slide-out-right 0.3s ease-in-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
