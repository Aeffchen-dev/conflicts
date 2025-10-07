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
					'0%': { clipPath: 'polygon(0% 15%, 10% 5%, 25% 0%, 40% 2%, 60% 0%, 75% 3%, 90% 8%, 100% 20%, 100% 80%, 90% 92%, 75% 97%, 60% 98%, 40% 100%, 25% 97%, 10% 92%, 0% 85%)' },
					'25%': { clipPath: 'polygon(0% 20%, 8% 8%, 20% 2%, 35% 0%, 55% 1%, 70% 0%, 85% 5%, 100% 15%, 100% 85%, 92% 95%, 78% 98%, 63% 100%, 45% 99%, 30% 98%, 15% 93%, 0% 80%)' },
					'50%': { clipPath: 'polygon(0% 18%, 12% 6%, 28% 1%, 42% 0%, 58% 2%, 72% 1%, 88% 7%, 100% 18%, 100% 82%, 88% 94%, 73% 99%, 58% 100%, 42% 98%, 27% 99%, 12% 95%, 0% 82%)' },
					'75%': { clipPath: 'polygon(0% 22%, 10% 10%, 23% 3%, 38% 1%, 57% 0%, 73% 2%, 87% 9%, 100% 22%, 100% 78%, 90% 91%, 77% 97%, 62% 99%, 43% 100%, 28% 98%, 13% 90%, 0% 78%)' },
					'100%': { clipPath: 'polygon(0% 15%, 10% 5%, 25% 0%, 40% 2%, 60% 0%, 75% 3%, 90% 8%, 100% 20%, 100% 80%, 90% 92%, 75% 97%, 60% 98%, 40% 100%, 25% 97%, 10% 92%, 0% 85%)' }
				},
				'wave-border-2': {
					'0%': { clipPath: 'polygon(0% 12%, 8% 3%, 22% 0%, 38% 1%, 55% 0%, 72% 2%, 88% 6%, 100% 18%, 100% 88%, 92% 96%, 78% 99%, 62% 100%, 45% 99%, 28% 97%, 12% 94%, 0% 82%)' },
					'25%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 2%, 40% 0%, 60% 1%, 75% 3%, 90% 10%, 100% 22%, 100% 78%, 88% 90%, 73% 96%, 58% 99%, 42% 100%, 27% 98%, 15% 92%, 0% 80%)' },
					'50%': { clipPath: 'polygon(0% 20%, 12% 10%, 28% 4%, 43% 2%, 58% 0%, 73% 1%, 87% 7%, 100% 20%, 100% 80%, 90% 92%, 75% 97%, 60% 99%, 45% 100%, 30% 98%, 13% 93%, 0% 78%)' },
					'75%': { clipPath: 'polygon(0% 15%, 9% 5%, 24% 1%, 39% 0%, 56% 2%, 71% 0%, 86% 8%, 100% 19%, 100% 85%, 91% 94%, 76% 98%, 61% 100%, 44% 98%, 29% 99%, 14% 95%, 0% 83%)' },
					'100%': { clipPath: 'polygon(0% 12%, 8% 3%, 22% 0%, 38% 1%, 55% 0%, 72% 2%, 88% 6%, 100% 18%, 100% 88%, 92% 96%, 78% 99%, 62% 100%, 45% 99%, 28% 97%, 12% 94%, 0% 82%)' }
				},
				'wave-border-3': {
					'0%': { clipPath: 'polygon(0% 16%, 11% 7%, 26% 2%, 41% 0%, 59% 1%, 74% 3%, 89% 9%, 100% 21%, 100% 79%, 89% 91%, 74% 96%, 59% 99%, 41% 100%, 26% 98%, 11% 93%, 0% 84%)' },
					'25%': { clipPath: 'polygon(0% 19%, 9% 9%, 24% 4%, 39% 2%, 57% 0%, 72% 1%, 87% 8%, 100% 20%, 100% 80%, 88% 93%, 73% 97%, 58% 99%, 40% 100%, 25% 98%, 10% 91%, 0% 81%)' },
					'50%': { clipPath: 'polygon(0% 14%, 10% 5%, 25% 1%, 40% 0%, 60% 2%, 75% 0%, 90% 7%, 100% 19%, 100% 86%, 90% 95%, 75% 99%, 60% 100%, 40% 98%, 25% 99%, 10% 94%, 0% 81%)' },
					'75%': { clipPath: 'polygon(0% 21%, 12% 11%, 27% 5%, 42% 3%, 58% 1%, 73% 2%, 88% 10%, 100% 23%, 100% 77%, 87% 89%, 72% 95%, 57% 98%, 41% 100%, 26% 97%, 11% 90%, 0% 79%)' },
					'100%': { clipPath: 'polygon(0% 16%, 11% 7%, 26% 2%, 41% 0%, 59% 1%, 74% 3%, 89% 9%, 100% 21%, 100% 79%, 89% 91%, 74% 96%, 59% 99%, 41% 100%, 26% 98%, 11% 93%, 0% 84%)' }
				},
				'wave-border-4': {
					'0%': { clipPath: 'polygon(0% 10%, 7% 2%, 21% 0%, 37% 1%, 54% 0%, 71% 2%, 87% 5%, 100% 17%, 100% 90%, 93% 97%, 79% 100%, 63% 99%, 46% 100%, 29% 98%, 13% 95%, 0% 83%)' },
					'25%': { clipPath: 'polygon(0% 17%, 10% 7%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 8%, 100% 20%, 100% 80%, 89% 92%, 74% 97%, 59% 99%, 41% 100%, 26% 98%, 11% 93%, 0% 82%)' },
					'50%': { clipPath: 'polygon(0% 22%, 13% 12%, 29% 6%, 44% 4%, 59% 2%, 74% 3%, 88% 11%, 100% 24%, 100% 76%, 86% 88%, 71% 94%, 56% 97%, 40% 100%, 25% 96%, 10% 89%, 0% 78%)' },
					'75%': { clipPath: 'polygon(0% 13%, 8% 4%, 23% 1%, 38% 0%, 56% 2%, 71% 1%, 86% 7%, 100% 18%, 100% 87%, 92% 95%, 77% 99%, 62% 100%, 44% 98%, 29% 99%, 14% 96%, 0% 85%)' },
					'100%': { clipPath: 'polygon(0% 10%, 7% 2%, 21% 0%, 37% 1%, 54% 0%, 71% 2%, 87% 5%, 100% 17%, 100% 90%, 93% 97%, 79% 100%, 63% 99%, 46% 100%, 29% 98%, 13% 95%, 0% 83%)' }
				},
				'wave-border-5': {
					'0%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 79%, 90% 91%, 75% 97%, 60% 100%, 40% 99%, 25% 97%, 10% 92%, 0% 82%)' },
					'25%': { clipPath: 'polygon(0% 14%, 9% 5%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 86%, 91% 94%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' },
					'50%': { clipPath: 'polygon(0% 20%, 11% 10%, 26% 5%, 41% 3%, 59% 1%, 74% 2%, 89% 10%, 100% 22%, 100% 78%, 88% 90%, 73% 95%, 58% 98%, 40% 100%, 25% 97%, 10% 91%, 0% 80%)' },
					'75%': { clipPath: 'polygon(0% 16%, 8% 6%, 23% 2%, 38% 0%, 56% 1%, 71% 0%, 86% 8%, 100% 20%, 100% 84%, 92% 93%, 77% 97%, 62% 99%, 44% 100%, 29% 98%, 14% 94%, 0% 82%)' },
					'100%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 79%, 90% 91%, 75% 97%, 60% 100%, 40% 99%, 25% 97%, 10% 92%, 0% 82%)' }
				},
				'wave-border-6': {
					'0%': { clipPath: 'polygon(0% 11%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 89%, 92% 96%, 77% 99%, 62% 100%, 44% 99%, 29% 97%, 14% 94%, 0% 82%)' },
					'25%': { clipPath: 'polygon(0% 19%, 10% 9%, 25% 4%, 40% 2%, 60% 1%, 75% 3%, 90% 10%, 100% 22%, 100% 78%, 88% 90%, 73% 96%, 58% 99%, 40% 100%, 25% 98%, 10% 92%, 0% 81%)' },
					'50%': { clipPath: 'polygon(0% 15%, 9% 6%, 24% 2%, 39% 0%, 57% 2%, 72% 1%, 87% 8%, 100% 20%, 100% 85%, 91% 93%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 94%, 0% 83%)' },
					'75%': { clipPath: 'polygon(0% 21%, 11% 11%, 26% 6%, 41% 4%, 59% 2%, 74% 3%, 89% 11%, 100% 23%, 100% 77%, 87% 89%, 72% 94%, 57% 97%, 39% 100%, 24% 96%, 9% 90%, 0% 79%)' },
					'100%': { clipPath: 'polygon(0% 11%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 89%, 92% 96%, 77% 99%, 62% 100%, 44% 99%, 29% 97%, 14% 94%, 0% 82%)' }
				},
				'wave-border-7': {
					'0%': { clipPath: 'polygon(0% 17%, 9% 7%, 24% 2%, 39% 0%, 57% 1%, 72% 2%, 87% 8%, 100% 20%, 100% 83%, 91% 92%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 93%, 0% 80%)' },
					'25%': { clipPath: 'polygon(0% 13%, 10% 4%, 25% 1%, 40% 0%, 60% 2%, 75% 1%, 90% 7%, 100% 19%, 100% 87%, 90% 94%, 75% 98%, 60% 100%, 40% 98%, 25% 99%, 10% 95%, 0% 84%)' },
					'50%': { clipPath: 'polygon(0% 19%, 8% 9%, 23% 4%, 38% 2%, 56% 1%, 71% 3%, 86% 9%, 100% 21%, 100% 79%, 89% 91%, 74% 96%, 59% 98%, 41% 100%, 26% 97%, 11% 92%, 0% 81%)' },
					'75%': { clipPath: 'polygon(0% 16%, 11% 6%, 26% 2%, 41% 1%, 59% 0%, 74% 2%, 89% 8%, 100% 20%, 100% 84%, 88% 93%, 73% 97%, 58% 99%, 40% 100%, 25% 98%, 10% 94%, 0% 82%)' },
					'100%': { clipPath: 'polygon(0% 17%, 9% 7%, 24% 2%, 39% 0%, 57% 1%, 72% 2%, 87% 8%, 100% 20%, 100% 83%, 91% 92%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 93%, 0% 80%)' }
				},
				'wave-border-8': {
					'0%': { clipPath: 'polygon(0% 14%, 10% 5%, 25% 1%, 40% 0%, 60% 2%, 75% 0%, 90% 7%, 100% 19%, 100% 86%, 90% 94%, 75% 98%, 60% 100%, 40% 98%, 25% 99%, 10% 95%, 0% 81%)' },
					'25%': { clipPath: 'polygon(0% 20%, 9% 10%, 24% 5%, 39% 3%, 57% 1%, 72% 2%, 87% 9%, 100% 21%, 100% 79%, 88% 91%, 73% 96%, 58% 98%, 40% 100%, 25% 97%, 10% 92%, 0% 80%)' },
					'50%': { clipPath: 'polygon(0% 12%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 88%, 92% 95%, 77% 99%, 62% 100%, 44% 99%, 29% 98%, 14% 94%, 0% 82%)' },
					'75%': { clipPath: 'polygon(0% 18%, 11% 8%, 26% 4%, 41% 2%, 59% 1%, 74% 3%, 89% 10%, 100% 22%, 100% 78%, 87% 90%, 72% 95%, 57% 98%, 39% 100%, 24% 96%, 9% 91%, 0% 82%)' },
					'100%': { clipPath: 'polygon(0% 14%, 10% 5%, 25% 1%, 40% 0%, 60% 2%, 75% 0%, 90% 7%, 100% 19%, 100% 86%, 90% 94%, 75% 98%, 60% 100%, 40% 98%, 25% 99%, 10% 95%, 0% 81%)' }
				},
				'wave-border-9': {
					'0%': { clipPath: 'polygon(0% 16%, 10% 6%, 25% 2%, 40% 0%, 60% 1%, 75% 2%, 90% 8%, 100% 20%, 100% 84%, 90% 92%, 75% 97%, 60% 99%, 40% 100%, 25% 98%, 10% 93%, 0% 80%)' },
					'25%': { clipPath: 'polygon(0% 12%, 9% 4%, 24% 0%, 39% 1%, 57% 0%, 72% 2%, 87% 6%, 100% 18%, 100% 88%, 91% 95%, 76% 99%, 61% 100%, 43% 98%, 28% 99%, 13% 96%, 0% 82%)' },
					'50%': { clipPath: 'polygon(0% 19%, 11% 9%, 26% 4%, 41% 2%, 59% 1%, 74% 3%, 89% 10%, 100% 22%, 100% 78%, 88% 90%, 73% 95%, 58% 98%, 40% 100%, 25% 97%, 10% 91%, 0% 81%)' },
					'75%': { clipPath: 'polygon(0% 15%, 8% 5%, 23% 1%, 38% 0%, 56% 2%, 71% 1%, 86% 7%, 100% 19%, 100% 85%, 92% 93%, 77% 98%, 62% 100%, 44% 98%, 29% 99%, 14% 94%, 0% 83%)' },
					'100%': { clipPath: 'polygon(0% 16%, 10% 6%, 25% 2%, 40% 0%, 60% 1%, 75% 2%, 90% 8%, 100% 20%, 100% 84%, 90% 92%, 75% 97%, 60% 99%, 40% 100%, 25% 98%, 10% 93%, 0% 80%)' }
				},
				'wave-border-10': {
					'0%': { clipPath: 'polygon(0% 13%, 9% 4%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 87%, 91% 94%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' },
					'25%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 79%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 82%)' },
					'50%': { clipPath: 'polygon(0% 21%, 11% 11%, 26% 6%, 41% 4%, 59% 2%, 74% 3%, 89% 11%, 100% 23%, 100% 77%, 87% 89%, 72% 94%, 57% 97%, 39% 100%, 24% 96%, 9% 90%, 0% 79%)' },
					'75%': { clipPath: 'polygon(0% 14%, 8% 5%, 23% 2%, 38% 0%, 56% 1%, 71% 0%, 86% 8%, 100% 20%, 100% 86%, 92% 93%, 77% 97%, 62% 99%, 44% 100%, 29% 98%, 14% 94%, 0% 80%)' },
					'100%': { clipPath: 'polygon(0% 13%, 9% 4%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 87%, 91% 94%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' }
				},
				'wave-border-11': {
					'0%': { clipPath: 'polygon(0% 17%, 10% 7%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 83%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 79%)' },
					'25%': { clipPath: 'polygon(0% 11%, 9% 3%, 24% 0%, 39% 1%, 57% 0%, 72% 2%, 87% 6%, 100% 18%, 100% 89%, 91% 95%, 76% 99%, 61% 100%, 43% 98%, 28% 99%, 13% 96%, 0% 82%)' },
					'50%': { clipPath: 'polygon(0% 20%, 8% 10%, 23% 5%, 38% 3%, 56% 1%, 71% 2%, 86% 10%, 100% 22%, 100% 78%, 89% 90%, 74% 95%, 59% 97%, 41% 100%, 26% 96%, 11% 91%, 0% 80%)' },
					'75%': { clipPath: 'polygon(0% 15%, 11% 6%, 26% 2%, 41% 0%, 59% 2%, 74% 1%, 89% 8%, 100% 20%, 100% 85%, 88% 92%, 73% 97%, 58% 99%, 40% 100%, 25% 98%, 10% 93%, 0% 81%)' },
					'100%': { clipPath: 'polygon(0% 17%, 10% 7%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 83%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 79%)' }
				},
				'wave-border-12': {
					'0%': { clipPath: 'polygon(0% 14%, 9% 5%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 86%, 91% 94%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' },
					'25%': { clipPath: 'polygon(0% 19%, 10% 9%, 25% 4%, 40% 2%, 60% 1%, 75% 3%, 90% 10%, 100% 22%, 100% 78%, 88% 90%, 73% 96%, 58% 99%, 40% 100%, 25% 98%, 10% 92%, 0% 81%)' },
					'50%': { clipPath: 'polygon(0% 12%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 88%, 92% 95%, 77% 99%, 62% 100%, 44% 99%, 29% 98%, 14% 94%, 0% 82%)' },
					'75%': { clipPath: 'polygon(0% 16%, 11% 7%, 26% 3%, 41% 1%, 59% 0%, 74% 2%, 89% 9%, 100% 21%, 100% 84%, 87% 91%, 72% 96%, 57% 98%, 39% 100%, 24% 97%, 9% 93%, 0% 79%)' },
					'100%': { clipPath: 'polygon(0% 14%, 9% 5%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 86%, 91% 94%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' }
				},
				'wave-border-13': {
					'0%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 82%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 78%)' },
					'25%': { clipPath: 'polygon(0% 13%, 9% 4%, 24% 0%, 39% 1%, 57% 0%, 72% 2%, 87% 6%, 100% 18%, 100% 87%, 91% 94%, 76% 99%, 61% 100%, 43% 98%, 28% 99%, 13% 96%, 0% 84%)' },
					'50%': { clipPath: 'polygon(0% 21%, 11% 11%, 26% 6%, 41% 4%, 59% 2%, 74% 3%, 89% 11%, 100% 23%, 100% 77%, 87% 89%, 72% 94%, 57% 97%, 39% 100%, 24% 96%, 9% 90%, 0% 79%)' },
					'75%': { clipPath: 'polygon(0% 16%, 8% 6%, 23% 2%, 38% 0%, 56% 1%, 71% 0%, 86% 8%, 100% 20%, 100% 84%, 92% 92%, 77% 97%, 62% 99%, 44% 100%, 29% 98%, 14% 94%, 0% 82%)' },
					'100%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 82%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 78%)' }
				},
				'wave-border-14': {
					'0%': { clipPath: 'polygon(0% 15%, 9% 6%, 24% 2%, 39% 0%, 57% 1%, 72% 0%, 87% 8%, 100% 20%, 100% 85%, 91% 93%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 94%, 0% 80%)' },
					'25%': { clipPath: 'polygon(0% 20%, 10% 10%, 25% 5%, 40% 3%, 60% 1%, 75% 2%, 90% 10%, 100% 22%, 100% 80%, 88% 90%, 73% 95%, 58% 98%, 40% 100%, 25% 97%, 10% 91%, 0% 78%)' },
					'50%': { clipPath: 'polygon(0% 11%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 89%, 92% 95%, 77% 99%, 62% 100%, 44% 99%, 29% 98%, 14% 94%, 0% 83%)' },
					'75%': { clipPath: 'polygon(0% 17%, 11% 8%, 26% 4%, 41% 2%, 59% 1%, 74% 3%, 89% 9%, 100% 21%, 100% 83%, 87% 91%, 72% 96%, 57% 98%, 39% 100%, 24% 97%, 9% 92%, 0% 79%)' },
					'100%': { clipPath: 'polygon(0% 15%, 9% 6%, 24% 2%, 39% 0%, 57% 1%, 72% 0%, 87% 8%, 100% 20%, 100% 85%, 91% 93%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 94%, 0% 80%)' }
				},
				'wave-border-15': {
					'0%': { clipPath: 'polygon(0% 19%, 10% 9%, 25% 4%, 40% 2%, 60% 1%, 75% 3%, 90% 10%, 100% 22%, 100% 81%, 88% 90%, 73% 95%, 58% 98%, 40% 100%, 25% 97%, 10% 91%, 0% 78%)' },
					'25%': { clipPath: 'polygon(0% 14%, 9% 5%, 24% 1%, 39% 0%, 57% 2%, 72% 1%, 87% 7%, 100% 19%, 100% 86%, 91% 93%, 76% 98%, 61% 100%, 43% 98%, 28% 99%, 13% 95%, 0% 81%)' },
					'50%': { clipPath: 'polygon(0% 22%, 11% 12%, 26% 7%, 41% 5%, 59% 3%, 74% 4%, 89% 12%, 100% 24%, 100% 76%, 86% 88%, 71% 93%, 56% 96%, 38% 100%, 23% 95%, 8% 89%, 0% 78%)' },
					'75%': { clipPath: 'polygon(0% 16%, 8% 6%, 23% 2%, 38% 0%, 56% 1%, 71% 0%, 86% 8%, 100% 20%, 100% 84%, 92% 92%, 77% 97%, 62% 99%, 44% 100%, 29% 98%, 14% 94%, 0% 82%)' },
					'100%': { clipPath: 'polygon(0% 19%, 10% 9%, 25% 4%, 40% 2%, 60% 1%, 75% 3%, 90% 10%, 100% 22%, 100% 81%, 88% 90%, 73% 95%, 58% 98%, 40% 100%, 25% 97%, 10% 91%, 0% 78%)' }
				},
				'wave-border-16': {
					'0%': { clipPath: 'polygon(0% 12%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 88%, 92% 95%, 77% 99%, 62% 100%, 44% 99%, 29% 98%, 14% 94%, 0% 82%)' },
					'25%': { clipPath: 'polygon(0% 18%, 10% 8%, 25% 3%, 40% 1%, 60% 0%, 75% 2%, 90% 9%, 100% 21%, 100% 82%, 90% 91%, 75% 96%, 60% 99%, 40% 100%, 25% 97%, 10% 92%, 0% 79%)' },
					'50%': { clipPath: 'polygon(0% 15%, 9% 6%, 24% 2%, 39% 0%, 57% 1%, 72% 0%, 87% 8%, 100% 20%, 100% 85%, 91% 93%, 76% 97%, 61% 99%, 43% 100%, 28% 98%, 13% 94%, 0% 80%)' },
					'75%': { clipPath: 'polygon(0% 21%, 11% 11%, 26% 6%, 41% 4%, 59% 2%, 74% 3%, 89% 11%, 100% 23%, 100% 79%, 87% 89%, 72% 94%, 57% 97%, 39% 100%, 24% 96%, 9% 90%, 0% 77%)' },
					'100%': { clipPath: 'polygon(0% 12%, 8% 3%, 23% 0%, 38% 1%, 56% 0%, 71% 2%, 86% 6%, 100% 18%, 100% 88%, 92% 95%, 77% 99%, 62% 100%, 44% 99%, 29% 98%, 14% 94%, 0% 82%)' }
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
