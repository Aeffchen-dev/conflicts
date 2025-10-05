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
					'0%': { borderRadius: '65% 35% 60% 40% / 45% 60% 40% 55%' },
					'25%': { borderRadius: '55% 45% 42% 58% / 58% 42% 58% 42%' },
					'50%': { borderRadius: '40% 60% 50% 50% / 60% 35% 65% 40%' },
					'75%': { borderRadius: '50% 50% 58% 42% / 42% 58% 42% 58%' },
					'100%': { borderRadius: '65% 35% 60% 40% / 45% 60% 40% 55%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '48% 52% 62% 38% / 60% 44% 56% 40%' },
					'25%': { borderRadius: '40% 60% 48% 52% / 44% 58% 42% 56%' },
					'50%': { borderRadius: '52% 48% 38% 62% / 40% 60% 40% 60%' },
					'75%': { borderRadius: '60% 40% 54% 46% / 56% 42% 58% 44%' },
					'100%': { borderRadius: '48% 52% 62% 38% / 60% 44% 56% 40%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '62% 38% 48% 52% / 44% 60% 40% 56%' },
					'25%': { borderRadius: '50% 50% 58% 42% / 58% 44% 56% 42%' },
					'50%': { borderRadius: '38% 62% 58% 42% / 60% 38% 62% 40%' },
					'75%': { borderRadius: '52% 48% 44% 56% / 42% 58% 42% 58%' },
					'100%': { borderRadius: '62% 38% 48% 52% / 44% 60% 40% 56%' }
				},
				'wave-border-4': {
					'0%': { borderRadius: '58% 42% 55% 45% / 55% 48% 52% 45%' },
					'25%': { borderRadius: '45% 55% 44% 56% / 58% 44% 56% 42%' },
					'50%': { borderRadius: '42% 58% 45% 55% / 48% 58% 42% 52%' },
					'75%': { borderRadius: '55% 45% 58% 42% / 44% 55% 45% 56%' },
					'100%': { borderRadius: '58% 42% 55% 45% / 55% 48% 52% 45%' }
				},
				'wave-border-5': {
					'0%': { borderRadius: '46% 54% 64% 36% / 58% 42% 58% 42%' },
					'25%': { borderRadius: '60% 40% 50% 50% / 44% 56% 44% 56%' },
					'50%': { borderRadius: '58% 42% 36% 64% / 42% 62% 38% 58%' },
					'75%': { borderRadius: '44% 56% 52% 48% / 56% 44% 56% 44%' },
					'100%': { borderRadius: '46% 54% 64% 36% / 58% 42% 58% 42%' }
				},
				'wave-border-6': {
					'0%': { borderRadius: '60% 40% 44% 56% / 48% 56% 44% 52%' },
					'25%': { borderRadius: '48% 52% 56% 44% / 58% 42% 58% 42%' },
					'50%': { borderRadius: '40% 60% 55% 45% / 56% 42% 58% 44%' },
					'75%': { borderRadius: '56% 44% 48% 52% / 42% 58% 42% 58%' },
					'100%': { borderRadius: '60% 40% 44% 56% / 48% 56% 44% 52%' }
				},
				'wave-border-7': {
					'0%': { borderRadius: '44% 56% 60% 40% / 62% 44% 56% 38%' },
					'25%': { borderRadius: '58% 42% 48% 52% / 48% 58% 42% 52%' },
					'50%': { borderRadius: '56% 44% 40% 60% / 38% 60% 40% 62%' },
					'75%': { borderRadius: '42% 58% 54% 46% / 58% 42% 58% 42%' },
					'100%': { borderRadius: '44% 56% 60% 40% / 62% 44% 56% 38%' }
				},
				'wave-border-8': {
					'0%': { borderRadius: '58% 42% 58% 42% / 44% 58% 42% 56%' },
					'25%': { borderRadius: '48% 52% 48% 52% / 56% 44% 56% 44%' },
					'50%': { borderRadius: '42% 58% 42% 58% / 58% 40% 60% 42%' },
					'75%': { borderRadius: '54% 46% 56% 44% / 44% 58% 42% 56%' },
					'100%': { borderRadius: '58% 42% 58% 42% / 44% 58% 42% 56%' }
				},
				'wave-border-9': {
					'0%': { borderRadius: '48% 52% 58% 42% / 60% 48% 52% 40%' },
					'25%': { borderRadius: '58% 42% 48% 52% / 44% 58% 42% 56%' },
					'50%': { borderRadius: '54% 46% 42% 58% / 40% 62% 38% 62%' },
					'75%': { borderRadius: '42% 58% 56% 44% / 56% 42% 58% 44%' },
					'100%': { borderRadius: '48% 52% 58% 42% / 60% 48% 52% 40%' }
				},
				'wave-border-10': {
					'0%': { borderRadius: '62% 38% 54% 46% / 55% 45% 55% 45%' },
					'25%': { borderRadius: '52% 48% 44% 56% / 44% 56% 44% 56%' },
					'50%': { borderRadius: '38% 62% 46% 54% / 45% 60% 40% 55%' },
					'75%': { borderRadius: '52% 48% 58% 42% / 58% 42% 58% 42%' },
					'100%': { borderRadius: '62% 38% 54% 46% / 55% 45% 55% 45%' }
				},
				'wave-border-11': {
					'0%': { borderRadius: '42% 58% 62% 38% / 58% 42% 58% 42%' },
					'25%': { borderRadius: '56% 44% 54% 46% / 44% 56% 44% 56%' },
					'50%': { borderRadius: '58% 42% 38% 62% / 42% 60% 40% 58%' },
					'75%': { borderRadius: '44% 56% 52% 48% / 56% 44% 56% 44%' },
					'100%': { borderRadius: '42% 58% 62% 38% / 58% 42% 58% 42%' }
				},
				'wave-border-12': {
					'0%': { borderRadius: '54% 46% 48% 52% / 48% 58% 42% 52%' },
					'25%': { borderRadius: '44% 56% 58% 42% / 58% 44% 56% 42%' },
					'50%': { borderRadius: '46% 54% 58% 42% / 58% 42% 58% 42%' },
					'75%': { borderRadius: '58% 42% 44% 56% / 42% 58% 42% 58%' },
					'100%': { borderRadius: '54% 46% 48% 52% / 48% 58% 42% 52%' }
				},
				'wave-border-13': {
					'0%': { borderRadius: '64% 36% 42% 58% / 44% 56% 44% 56%' },
					'25%': { borderRadius: '56% 44% 52% 48% / 56% 44% 56% 44%' },
					'50%': { borderRadius: '36% 64% 58% 42% / 56% 44% 56% 44%' },
					'75%': { borderRadius: '52% 48% 48% 52% / 44% 58% 42% 56%' },
					'100%': { borderRadius: '64% 36% 42% 58% / 44% 56% 44% 56%' }
				},
				'wave-border-14': {
					'0%': { borderRadius: '40% 60% 54% 46% / 60% 40% 60% 40%' },
					'25%': { borderRadius: '52% 48% 48% 52% / 48% 56% 44% 52%' },
					'50%': { borderRadius: '60% 40% 46% 54% / 40% 62% 38% 62%' },
					'75%': { borderRadius: '44% 56% 56% 44% / 56% 42% 58% 44%' },
					'100%': { borderRadius: '40% 60% 54% 46% / 60% 40% 60% 40%' }
				},
				'wave-border-15': {
					'0%': { borderRadius: '48% 52% 62% 38% / 56% 48% 52% 44%' },
					'25%': { borderRadius: '58% 42% 54% 46% / 44% 56% 44% 56%' },
					'50%': { borderRadius: '54% 46% 38% 62% / 44% 58% 42% 56%' },
					'75%': { borderRadius: '42% 58% 52% 48% / 56% 44% 56% 44%' },
					'100%': { borderRadius: '48% 52% 62% 38% / 56% 48% 52% 44%' }
				},
				'wave-border-16': {
					'0%': { borderRadius: '60% 40% 48% 52% / 58% 44% 56% 42%' },
					'25%': { borderRadius: '48% 52% 56% 44% / 44% 58% 42% 56%' },
					'50%': { borderRadius: '40% 60% 54% 46% / 42% 60% 40% 58%' },
					'75%': { borderRadius: '56% 44% 44% 56% / 56% 42% 58% 44%' },
					'100%': { borderRadius: '60% 40% 48% 52% / 58% 44% 56% 42%' }
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
