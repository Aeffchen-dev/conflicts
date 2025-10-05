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
					'0%': { borderRadius: '68% 32% 62% 38% / 42% 63% 37% 58%' },
					'20%': { borderRadius: '57% 43% 41% 59% / 61% 39% 61% 39%' },
					'40%': { borderRadius: '39% 61% 48% 52% / 63% 34% 66% 37%' },
					'60%': { borderRadius: '51% 49% 59% 41% / 40% 59% 41% 60%' },
					'80%': { borderRadius: '61% 39% 38% 62% / 58% 42% 58% 42%' },
					'100%': { borderRadius: '68% 32% 62% 38% / 42% 63% 37% 58%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '54% 46% 56% 44% / 53% 51% 49% 47%' },
					'20%': { borderRadius: '48% 52% 51% 49% / 49% 53% 47% 51%' },
					'40%': { borderRadius: '51% 49% 47% 53% / 52% 54% 46% 48%' },
					'60%': { borderRadius: '53% 47% 52% 48% / 50% 49% 51% 50%' },
					'80%': { borderRadius: '49% 51% 54% 46% / 51% 48% 52% 49%' },
					'100%': { borderRadius: '54% 46% 56% 44% / 53% 51% 49% 47%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '56% 44% 53% 47% / 51% 52% 48% 49%' },
					'20%': { borderRadius: '52% 48% 55% 45% / 54% 49% 51% 46%' },
					'40%': { borderRadius: '47% 53% 51% 49% / 52% 46% 54% 48%' },
					'60%': { borderRadius: '53% 47% 49% 51% / 49% 53% 47% 51%' },
					'80%': { borderRadius: '50% 50% 52% 48% / 48% 51% 49% 52%' },
					'100%': { borderRadius: '56% 44% 53% 47% / 51% 52% 48% 49%' }
				},
				'wave-border-4': {
					'0%': { borderRadius: '60% 40% 57% 43% / 56% 48% 52% 44%' },
					'20%': { borderRadius: '47% 53% 43% 57% / 59% 43% 57% 41%' },
					'40%': { borderRadius: '41% 59% 45% 55% / 48% 59% 41% 52%' },
					'60%': { borderRadius: '56% 44% 58% 42% / 43% 56% 44% 57%' },
					'80%': { borderRadius: '53% 47% 40% 60% / 57% 43% 57% 43%' },
					'100%': { borderRadius: '60% 40% 57% 43% / 56% 48% 52% 44%' }
				},
				'wave-border-5': {
					'0%': { borderRadius: '44% 56% 65% 35% / 60% 41% 59% 40%' },
					'20%': { borderRadius: '59% 41% 49% 51% / 42% 58% 42% 58%' },
					'40%': { borderRadius: '60% 40% 35% 65% / 41% 64% 36% 59%' },
					'60%': { borderRadius: '43% 57% 53% 47% / 58% 42% 58% 42%' },
					'80%': { borderRadius: '51% 49% 59% 41% / 40% 59% 41% 60%' },
					'100%': { borderRadius: '44% 56% 65% 35% / 60% 41% 59% 40%' }
				},
				'wave-border-6': {
					'0%': { borderRadius: '62% 38% 43% 57% / 47% 58% 42% 53%' },
					'20%': { borderRadius: '49% 51% 58% 42% / 60% 41% 59% 40%' },
					'40%': { borderRadius: '39% 61% 56% 44% / 58% 40% 60% 42%' },
					'60%': { borderRadius: '57% 43% 48% 52% / 41% 59% 41% 59%' },
					'80%': { borderRadius: '51% 49% 39% 61% / 59% 41% 59% 41%' },
					'100%': { borderRadius: '62% 38% 43% 57% / 47% 58% 42% 53%' }
				},
				'wave-border-7': {
					'0%': { borderRadius: '42% 58% 62% 38% / 64% 42% 58% 36%' },
					'20%': { borderRadius: '59% 41% 47% 53% / 47% 59% 41% 53%' },
					'40%': { borderRadius: '57% 43% 39% 61% / 37% 61% 39% 63%' },
					'60%': { borderRadius: '40% 60% 55% 45% / 60% 40% 60% 40%' },
					'80%': { borderRadius: '53% 47% 58% 42% / 42% 58% 42% 58%' },
					'100%': { borderRadius: '42% 58% 62% 38% / 64% 42% 58% 36%' }
				},
				'wave-border-8': {
					'0%': { borderRadius: '60% 40% 60% 40% / 43% 60% 40% 57%' },
					'20%': { borderRadius: '48% 52% 47% 53% / 58% 42% 58% 42%' },
					'40%': { borderRadius: '41% 59% 41% 59% / 60% 38% 62% 40%' },
					'60%': { borderRadius: '55% 45% 58% 42% / 42% 59% 41% 58%' },
					'80%': { borderRadius: '52% 48% 39% 61% / 57% 43% 57% 43%' },
					'100%': { borderRadius: '60% 40% 60% 40% / 43% 60% 40% 57%' }
				},
				'wave-border-9': {
					'0%': { borderRadius: '47% 53% 60% 40% / 62% 47% 53% 38%' },
					'20%': { borderRadius: '59% 41% 48% 52% / 43% 59% 41% 57%' },
					'40%': { borderRadius: '54% 46% 41% 59% / 39% 63% 37% 61%' },
					'60%': { borderRadius: '41% 59% 57% 43% / 58% 41% 59% 42%' },
					'80%': { borderRadius: '52% 48% 53% 47% / 47% 52% 48% 53%' },
					'100%': { borderRadius: '47% 53% 60% 40% / 62% 47% 53% 38%' }
				},
				'wave-border-10': {
					'0%': { borderRadius: '64% 36% 55% 45% / 56% 44% 56% 44%' },
					'20%': { borderRadius: '53% 47% 43% 57% / 43% 57% 43% 57%' },
					'40%': { borderRadius: '37% 63% 47% 53% / 44% 59% 41% 56%' },
					'60%': { borderRadius: '53% 47% 59% 41% / 59% 41% 59% 41%' },
					'80%': { borderRadius: '47% 53% 36% 64% / 56% 44% 56% 44%' },
					'100%': { borderRadius: '64% 36% 55% 45% / 56% 44% 56% 44%' }
				},
				'wave-border-11': {
					'0%': { borderRadius: '40% 60% 64% 36% / 60% 40% 60% 40%' },
					'20%': { borderRadius: '57% 43% 55% 45% / 43% 57% 43% 57%' },
					'40%': { borderRadius: '59% 41% 37% 63% / 41% 61% 39% 59%' },
					'60%': { borderRadius: '43% 57% 53% 47% / 58% 42% 58% 42%' },
					'80%': { borderRadius: '51% 49% 59% 41% / 40% 60% 40% 60%' },
					'100%': { borderRadius: '40% 60% 64% 36% / 60% 40% 60% 40%' }
				},
				'wave-border-12': {
					'0%': { borderRadius: '55% 45% 47% 53% / 47% 60% 40% 53%' },
					'20%': { borderRadius: '43% 57% 60% 40% / 60% 42% 58% 40%' },
					'40%': { borderRadius: '46% 54% 59% 41% / 60% 40% 60% 40%' },
					'60%': { borderRadius: '59% 41% 42% 58% / 41% 59% 41% 59%' },
					'80%': { borderRadius: '52% 48% 54% 46% / 53% 47% 53% 47%' },
					'100%': { borderRadius: '55% 45% 47% 53% / 47% 60% 40% 53%' }
				},
				'wave-border-13': {
					'0%': { borderRadius: '66% 34% 40% 60% / 42% 58% 42% 58%' },
					'20%': { borderRadius: '57% 43% 53% 47% / 58% 42% 58% 42%' },
					'40%': { borderRadius: '35% 65% 59% 41% / 58% 42% 58% 42%' },
					'60%': { borderRadius: '53% 47% 47% 53% / 42% 60% 40% 58%' },
					'80%': { borderRadius: '59% 41% 61% 39% / 58% 42% 58% 42%' },
					'100%': { borderRadius: '66% 34% 40% 60% / 42% 58% 42% 58%' }
				},
				'wave-border-14': {
					'0%': { borderRadius: '38% 62% 55% 45% / 62% 38% 62% 38%' },
					'20%': { borderRadius: '53% 47% 47% 53% / 47% 58% 42% 53%' },
					'40%': { borderRadius: '62% 38% 45% 55% / 38% 64% 36% 62%' },
					'60%': { borderRadius: '42% 58% 58% 42% / 58% 40% 60% 42%' },
					'80%': { borderRadius: '51% 49% 39% 61% / 61% 39% 61% 39%' },
					'100%': { borderRadius: '38% 62% 55% 45% / 62% 38% 62% 38%' }
				},
				'wave-border-15': {
					'0%': { borderRadius: '47% 53% 64% 36% / 58% 47% 53% 42%' },
					'20%': { borderRadius: '60% 40% 55% 45% / 42% 58% 42% 58%' },
					'40%': { borderRadius: '55% 45% 37% 63% / 42% 60% 40% 58%' },
					'60%': { borderRadius: '40% 60% 53% 47% / 58% 42% 58% 42%' },
					'80%': { borderRadius: '53% 47% 59% 41% / 47% 53% 47% 53%' },
					'100%': { borderRadius: '47% 53% 64% 36% / 58% 47% 53% 42%' }
				},
				'wave-border-16': {
					'0%': { borderRadius: '62% 38% 47% 53% / 60% 42% 58% 40%' },
					'20%': { borderRadius: '48% 52% 58% 42% / 42% 60% 40% 58%' },
					'40%': { borderRadius: '39% 61% 55% 45% / 40% 62% 38% 60%' },
					'60%': { borderRadius: '58% 42% 43% 57% / 58% 40% 60% 42%' },
					'80%': { borderRadius: '51% 49% 61% 39% / 39% 61% 39% 61%' },
					'100%': { borderRadius: '62% 38% 47% 53% / 60% 42% 58% 40%' }
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
				'wave-border-1': 'wave-border-1 8s ease-in-out infinite',
				'wave-border-2': 'wave-border-2 9s ease-in-out infinite',
				'wave-border-3': 'wave-border-3 7s ease-in-out infinite',
				'wave-border-4': 'wave-border-4 10s ease-in-out infinite',
				'wave-border-5': 'wave-border-5 8.5s ease-in-out infinite',
				'wave-border-6': 'wave-border-6 9.5s ease-in-out infinite',
				'wave-border-7': 'wave-border-7 7.5s ease-in-out infinite',
				'wave-border-8': 'wave-border-8 10.5s ease-in-out infinite',
				'wave-border-9': 'wave-border-9 8s ease-in-out infinite',
				'wave-border-10': 'wave-border-10 9s ease-in-out infinite',
				'wave-border-11': 'wave-border-11 7.5s ease-in-out infinite',
				'wave-border-12': 'wave-border-12 10s ease-in-out infinite',
				'wave-border-13': 'wave-border-13 8.5s ease-in-out infinite',
				'wave-border-14': 'wave-border-14 9.5s ease-in-out infinite',
				'wave-border-15': 'wave-border-15 7s ease-in-out infinite',
				'wave-border-16': 'wave-border-16 10.5s ease-in-out infinite',
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
