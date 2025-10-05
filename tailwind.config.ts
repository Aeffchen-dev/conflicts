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
					'0%': { borderRadius: '62% 38% 58% 42% / 45% 57% 43% 55%' },
					'10%': { borderRadius: '55% 45% 47% 53% / 53% 46% 54% 47%' },
					'20%': { borderRadius: '48% 52% 42% 58% / 58% 42% 58% 42%' },
					'30%': { borderRadius: '41% 59% 53% 47% / 60% 40% 60% 40%' },
					'40%': { borderRadius: '47% 53% 59% 41% / 46% 54% 46% 54%' },
					'50%': { borderRadius: '54% 46% 52% 48% / 41% 59% 41% 59%' },
					'60%': { borderRadius: '59% 41% 46% 54% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '52% 48% 55% 45% / 56% 44% 56% 44%' },
					'80%': { borderRadius: '45% 55% 60% 40% / 49% 51% 49% 51%' },
					'90%': { borderRadius: '53% 47% 44% 56% / 47% 53% 47% 53%' },
					'100%': { borderRadius: '62% 38% 58% 42% / 45% 57% 43% 55%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '56% 44% 57% 43% / 53% 47% 53% 47%' },
					'10%': { borderRadius: '51% 49% 53% 47% / 48% 52% 48% 52%' },
					'20%': { borderRadius: '46% 54% 49% 51% / 52% 48% 52% 48%' },
					'30%': { borderRadius: '52% 48% 45% 55% / 54% 46% 54% 46%' },
					'40%': { borderRadius: '48% 52% 54% 46% / 49% 51% 49% 51%' },
					'50%': { borderRadius: '54% 46% 48% 52% / 46% 54% 46% 54%' },
					'60%': { borderRadius: '49% 51% 52% 48% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '47% 53% 50% 50% / 53% 47% 53% 47%' },
					'80%': { borderRadius: '53% 47% 55% 45% / 50% 50% 50% 50%' },
					'90%': { borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' },
					'100%': { borderRadius: '56% 44% 57% 43% / 53% 47% 53% 47%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '57% 43% 55% 45% / 51% 49% 51% 49%' },
					'10%': { borderRadius: '52% 48% 51% 49% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '49% 51% 54% 46% / 48% 52% 48% 52%' },
					'30%': { borderRadius: '47% 53% 56% 44% / 51% 49% 51% 49%' },
					'40%': { borderRadius: '52% 48% 50% 50% / 54% 46% 54% 46%' },
					'50%': { borderRadius: '50% 50% 47% 53% / 52% 48% 52% 48%' },
					'60%': { borderRadius: '54% 46% 52% 48% / 49% 51% 49% 51%' },
					'70%': { borderRadius: '51% 49% 50% 50% / 47% 53% 47% 53%' },
					'80%': { borderRadius: '49% 51% 55% 45% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '48% 52% 53% 47% / 53% 47% 53% 47%' },
					'100%': { borderRadius: '57% 43% 55% 45% / 51% 49% 51% 49%' }
				},
				'wave-border-4': {
					'0%': { borderRadius: '60% 40% 58% 42% / 54% 46% 54% 46%' },
					'10%': { borderRadius: '54% 46% 52% 48% / 51% 49% 51% 49%' },
					'20%': { borderRadius: '47% 53% 45% 55% / 53% 47% 53% 47%' },
					'30%': { borderRadius: '43% 57% 54% 46% / 56% 44% 56% 44%' },
					'40%': { borderRadius: '50% 50% 59% 41% / 48% 52% 48% 52%' },
					'50%': { borderRadius: '57% 43% 53% 47% / 43% 57% 43% 57%' },
					'60%': { borderRadius: '52% 48% 47% 53% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '46% 54% 55% 45% / 54% 46% 54% 46%' },
					'80%': { borderRadius: '54% 46% 49% 51% / 49% 51% 49% 51%' },
					'90%': { borderRadius: '51% 49% 56% 44% / 52% 48% 52% 48%' },
					'100%': { borderRadius: '60% 40% 58% 42% / 54% 46% 54% 46%' }
				},
				'wave-border-5': {
					'0%': { borderRadius: '43% 57% 61% 39% / 57% 43% 57% 43%' },
					'10%': { borderRadius: '54% 46% 55% 45% / 47% 53% 47% 53%' },
					'20%': { borderRadius: '58% 42% 48% 52% / 43% 57% 43% 57%' },
					'30%': { borderRadius: '51% 49% 52% 48% / 54% 46% 54% 46%' },
					'40%': { borderRadius: '45% 55% 57% 43% / 50% 50% 50% 50%' },
					'50%': { borderRadius: '52% 48% 50% 50% / 45% 55% 45% 55%' },
					'60%': { borderRadius: '56% 44% 46% 54% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '50% 50% 54% 46% / 56% 44% 56% 44%' },
					'80%': { borderRadius: '47% 53% 59% 41% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '53% 47% 53% 47% / 48% 52% 48% 52%' },
					'100%': { borderRadius: '43% 57% 61% 39% / 57% 43% 57% 43%' }
				},
				'wave-border-6': {
					'0%': { borderRadius: '61% 39% 46% 54% / 49% 56% 44% 51%' },
					'10%': { borderRadius: '54% 46% 55% 45% / 54% 46% 54% 46%' },
					'20%': { borderRadius: '47% 53% 59% 41% / 58% 42% 58% 42%' },
					'30%': { borderRadius: '44% 56% 53% 47% / 52% 48% 52% 48%' },
					'40%': { borderRadius: '50% 50% 47% 53% / 47% 53% 47% 53%' },
					'50%': { borderRadius: '57% 43% 54% 46% / 44% 56% 44% 56%' },
					'60%': { borderRadius: '52% 48% 50% 50% / 51% 49% 51% 49%' },
					'70%': { borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%' },
					'80%': { borderRadius: '54% 46% 57% 43% / 52% 48% 52% 48%' },
					'90%': { borderRadius: '51% 49% 49% 51% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '61% 39% 46% 54% / 49% 56% 44% 51%' }
				},
				'wave-border-7': {
					'0%': { borderRadius: '42% 58% 61% 39% / 60% 43% 57% 40%' },
					'10%': { borderRadius: '54% 46% 55% 45% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '59% 41% 47% 53% / 46% 54% 46% 54%' },
					'30%': { borderRadius: '51% 49% 52% 48% / 54% 46% 54% 46%' },
					'40%': { borderRadius: '45% 55% 58% 42% / 49% 51% 49% 51%' },
					'50%': { borderRadius: '52% 48% 50% 50% / 43% 57% 43% 57%' },
					'60%': { borderRadius: '57% 43% 45% 55% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '50% 50% 55% 45% / 57% 43% 57% 43%' },
					'80%': { borderRadius: '46% 54% 59% 41% / 51% 49% 51% 49%' },
					'90%': { borderRadius: '53% 47% 53% 47% / 47% 53% 47% 53%' },
					'100%': { borderRadius: '42% 58% 61% 39% / 60% 43% 57% 40%' }
				},
				'wave-border-8': {
					'0%': { borderRadius: '60% 40% 60% 40% / 45% 58% 42% 55%' },
					'10%': { borderRadius: '53% 47% 53% 47% / 54% 46% 54% 46%' },
					'20%': { borderRadius: '46% 54% 47% 53% / 58% 42% 58% 42%' },
					'30%': { borderRadius: '50% 50% 55% 45% / 51% 49% 51% 49%' },
					'40%': { borderRadius: '55% 45% 49% 51% / 46% 54% 46% 54%' },
					'50%': { borderRadius: '48% 52% 52% 48% / 52% 48% 52% 48%' },
					'60%': { borderRadius: '52% 48% 58% 42% / 47% 53% 47% 53%' },
					'70%': { borderRadius: '57% 43% 51% 49% / 54% 46% 54% 46%' },
					'80%': { borderRadius: '51% 49% 45% 55% / 52% 48% 52% 48%' },
					'90%': { borderRadius: '54% 46% 53% 47% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '60% 40% 60% 40% / 45% 58% 42% 55%' }
				},
				'wave-border-9': {
					'0%': { borderRadius: '46% 54% 60% 40% / 59% 47% 53% 41%' },
					'10%': { borderRadius: '56% 44% 55% 45% / 51% 54% 46% 49%' },
					'20%': { borderRadius: '59% 41% 49% 51% / 46% 58% 42% 54%' },
					'30%': { borderRadius: '52% 48% 45% 55% / 52% 51% 49% 48%' },
					'40%': { borderRadius: '45% 55% 53% 47% / 56% 46% 54% 44%' },
					'50%': { borderRadius: '51% 49% 57% 43% / 49% 52% 48% 51%' },
					'60%': { borderRadius: '54% 46% 50% 50% / 47% 54% 46% 53%' },
					'70%': { borderRadius: '52% 48% 54% 46% / 52% 49% 51% 48%' },
					'80%': { borderRadius: '49% 51% 52% 48% / 54% 48% 52% 46%' },
					'90%': { borderRadius: '54% 46% 57% 43% / 51% 52% 48% 49%' },
					'100%': { borderRadius: '46% 54% 60% 40% / 59% 47% 53% 41%' }
				},
				'wave-border-10': {
					'0%': { borderRadius: '62% 38% 56% 44% / 54% 46% 54% 46%' },
					'10%': { borderRadius: '54% 46% 47% 53% / 48% 54% 46% 52%' },
					'20%': { borderRadius: '45% 55% 45% 55% / 46% 58% 42% 54%' },
					'30%': { borderRadius: '41% 59% 53% 47% / 51% 49% 51% 49%' },
					'40%': { borderRadius: '47% 53% 58% 42% / 54% 46% 54% 46%' },
					'50%': { borderRadius: '54% 46% 51% 49% / 47% 53% 47% 53%' },
					'60%': { borderRadius: '59% 41% 47% 53% / 52% 48% 52% 48%' },
					'70%': { borderRadius: '51% 49% 54% 46% / 54% 46% 54% 46%' },
					'80%': { borderRadius: '47% 53% 59% 41% / 49% 51% 49% 51%' },
					'90%': { borderRadius: '53% 47% 53% 47% / 48% 52% 48% 52%' },
					'100%': { borderRadius: '62% 38% 56% 44% / 54% 46% 54% 46%' }
				},
				'wave-border-11': {
					'0%': { borderRadius: '41% 59% 62% 38% / 57% 43% 57% 43%' },
					'10%': { borderRadius: '53% 47% 56% 44% / 48% 52% 48% 52%' },
					'20%': { borderRadius: '59% 41% 51% 49% / 44% 56% 44% 56%' },
					'30%': { borderRadius: '51% 49% 47% 53% / 52% 48% 52% 48%' },
					'40%': { borderRadius: '45% 55% 55% 45% / 57% 43% 57% 43%' },
					'50%': { borderRadius: '52% 48% 50% 50% / 51% 49% 51% 49%' },
					'60%': { borderRadius: '57% 43% 53% 47% / 46% 54% 46% 54%' },
					'70%': { borderRadius: '50% 50% 57% 43% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '46% 54% 49% 51% / 49% 51% 49% 51%' },
					'90%': { borderRadius: '54% 46% 52% 48% / 48% 52% 48% 52%' },
					'100%': { borderRadius: '41% 59% 62% 38% / 57% 43% 57% 43%' }
				},
				'wave-border-12': {
					'0%': { borderRadius: '57% 43% 47% 53% / 49% 58% 42% 51%' },
					'10%': { borderRadius: '47% 53% 55% 45% / 54% 46% 54% 46%' },
					'20%': { borderRadius: '44% 56% 59% 41% / 58% 43% 57% 42%' },
					'30%': { borderRadius: '51% 49% 53% 47% / 52% 49% 51% 48%' },
					'40%': { borderRadius: '56% 44% 49% 51% / 47% 54% 46% 53%' },
					'50%': { borderRadius: '52% 48% 46% 54% / 51% 49% 51% 49%' },
					'60%': { borderRadius: '46% 54% 54% 46% / 54% 46% 54% 46%' },
					'70%': { borderRadius: '53% 47% 51% 49% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '55% 45% 53% 47% / 49% 52% 48% 51%' },
					'90%': { borderRadius: '51% 49% 55% 45% / 48% 51% 49% 52%' },
					'100%': { borderRadius: '57% 43% 47% 53% / 49% 58% 42% 51%' }
				},
				'wave-border-13': {
					'0%': { borderRadius: '63% 37% 42% 58% / 45% 56% 44% 55%' },
					'10%': { borderRadius: '55% 45% 53% 47% / 52% 48% 52% 48%' },
					'20%': { borderRadius: '49% 51% 58% 42% / 56% 44% 56% 44%' },
					'30%': { borderRadius: '45% 55% 51% 49% / 49% 51% 49% 51%' },
					'40%': { borderRadius: '40% 60% 55% 45% / 47% 53% 47% 53%' },
					'50%': { borderRadius: '51% 49% 49% 51% / 52% 48% 52% 48%' },
					'60%': { borderRadius: '57% 43% 47% 53% / 48% 54% 46% 52%' },
					'70%': { borderRadius: '52% 48% 52% 48% / 51% 49% 51% 49%' },
					'80%': { borderRadius: '59% 41% 56% 44% / 52% 48% 52% 48%' },
					'90%': { borderRadius: '52% 48% 50% 50% / 49% 51% 49% 51%' },
					'100%': { borderRadius: '63% 37% 42% 58% / 45% 56% 44% 55%' }
				},
				'wave-border-14': {
					'0%': { borderRadius: '40% 60% 56% 44% / 60% 40% 60% 40%' },
					'10%': { borderRadius: '51% 49% 51% 49% / 53% 49% 51% 47%' },
					'20%': { borderRadius: '57% 43% 47% 53% / 47% 56% 44% 53%' },
					'30%': { borderRadius: '61% 39% 53% 47% / 43% 60% 40% 57%' },
					'40%': { borderRadius: '53% 47% 57% 43% / 49% 52% 48% 51%' },
					'50%': { borderRadius: '45% 55% 50% 50% / 54% 46% 54% 46%' },
					'60%': { borderRadius: '50% 50% 55% 45% / 52% 44% 56% 48%' },
					'70%': { borderRadius: '55% 45% 52% 48% / 47% 53% 47% 53%' },
					'80%': { borderRadius: '49% 51% 45% 55% / 56% 45% 55% 44%' },
					'90%': { borderRadius: '52% 48% 50% 50% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '40% 60% 56% 44% / 60% 40% 60% 40%' }
				},
				'wave-border-15': {
					'0%': { borderRadius: '47% 53% 62% 38% / 56% 47% 53% 44%' },
					'10%': { borderRadius: '59% 41% 56% 44% / 46% 54% 46% 54%' },
					'20%': { borderRadius: '57% 43% 49% 51% / 44% 58% 42% 56%' },
					'30%': { borderRadius: '51% 49% 47% 53% / 51% 52% 48% 49%' },
					'40%': { borderRadius: '45% 55% 53% 47% / 55% 47% 53% 45%' },
					'50%': { borderRadius: '42% 58% 55% 45% / 49% 51% 49% 51%' },
					'60%': { borderRadius: '51% 49% 49% 51% / 47% 54% 46% 53%' },
					'70%': { borderRadius: '55% 45% 52% 48% / 52% 49% 51% 48%' },
					'80%': { borderRadius: '53% 47% 58% 42% / 49% 52% 48% 51%' },
					'90%': { borderRadius: '50% 50% 53% 47% / 52% 48% 52% 48%' },
					'100%': { borderRadius: '47% 53% 62% 38% / 56% 47% 53% 44%' }
				},
				'wave-border-16': {
					'0%': { borderRadius: '61% 39% 46% 54% / 58% 44% 56% 42%' },
					'10%': { borderRadius: '53% 47% 55% 45% / 46% 56% 44% 54%' },
					'20%': { borderRadius: '45% 55% 59% 41% / 44% 58% 42% 56%' },
					'30%': { borderRadius: '51% 49% 53% 47% / 52% 49% 51% 48%' },
					'40%': { borderRadius: '44% 56% 49% 51% / 55% 47% 53% 45%' },
					'50%': { borderRadius: '53% 47% 47% 53% / 51% 52% 48% 49%' },
					'60%': { borderRadius: '57% 43% 53% 47% / 47% 54% 46% 53%' },
					'70%': { borderRadius: '52% 48% 55% 45% / 52% 48% 52% 48%' },
					'80%': { borderRadius: '49% 51% 58% 42% / 46% 53% 47% 54%' },
					'90%': { borderRadius: '54% 46% 51% 49% / 51% 49% 51% 49%' },
					'100%': { borderRadius: '61% 39% 46% 54% / 58% 44% 56% 42%' }
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
				'wave-border-1': 'wave-border-1 9.3s ease-in-out infinite',
				'wave-border-2': 'wave-border-2 10.7s ease-in-out infinite',
				'wave-border-3': 'wave-border-3 8.7s ease-in-out infinite',
				'wave-border-4': 'wave-border-4 11.3s ease-in-out infinite',
				'wave-border-5': 'wave-border-5 10s ease-in-out infinite',
				'wave-border-6': 'wave-border-6 11s ease-in-out infinite',
				'wave-border-7': 'wave-border-7 9.7s ease-in-out infinite',
				'wave-border-8': 'wave-border-8 11.7s ease-in-out infinite',
				'wave-border-9': 'wave-border-9 9.3s ease-in-out infinite',
				'wave-border-10': 'wave-border-10 10.3s ease-in-out infinite',
				'wave-border-11': 'wave-border-11 9s ease-in-out infinite',
				'wave-border-12': 'wave-border-12 11.3s ease-in-out infinite',
				'wave-border-13': 'wave-border-13 10s ease-in-out infinite',
				'wave-border-14': 'wave-border-14 11s ease-in-out infinite',
				'wave-border-15': 'wave-border-15 8.7s ease-in-out infinite',
				'wave-border-16': 'wave-border-16 11.7s ease-in-out infinite',
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
