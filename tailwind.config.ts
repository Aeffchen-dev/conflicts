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
					'0%': { borderRadius: '58% 42% 55% 45% / 52% 48% 52% 48%' },
					'5%': { borderRadius: '52% 48% 61% 39% / 48% 55% 45% 52%' },
					'10%': { borderRadius: '55% 45% 47% 53% / 51% 46% 54% 49%' },
					'15%': { borderRadius: '48% 52% 58% 42% / 55% 52% 48% 45%' },
					'20%': { borderRadius: '53% 47% 49% 51% / 47% 49% 51% 53%' },
					'25%': { borderRadius: '49% 51% 56% 44% / 53% 47% 53% 47%' },
					'30%': { borderRadius: '56% 44% 50% 50% / 48% 54% 46% 52%' },
					'35%': { borderRadius: '47% 53% 54% 46% / 52% 45% 55% 48%' },
					'40%': { borderRadius: '54% 46% 52% 48% / 49% 53% 47% 51%' },
					'45%': { borderRadius: '50% 50% 48% 52% / 54% 48% 52% 46%' },
					'50%': { borderRadius: '52% 48% 57% 43% / 46% 51% 49% 54%' },
					'55%': { borderRadius: '48% 52% 45% 55% / 53% 49% 51% 47%' },
					'60%': { borderRadius: '55% 45% 53% 47% / 50% 52% 48% 50%' },
					'65%': { borderRadius: '46% 54% 51% 49% / 52% 46% 54% 48%' },
					'70%': { borderRadius: '53% 47% 46% 54% / 48% 55% 45% 52%' },
					'75%': { borderRadius: '51% 49% 59% 41% / 54% 47% 53% 46%' },
					'80%': { borderRadius: '57% 43% 48% 52% / 45% 53% 47% 55%' },
					'85%': { borderRadius: '45% 55% 52% 48% / 51% 48% 52% 49%' },
					'90%': { borderRadius: '52% 48% 54% 46% / 49% 54% 46% 51%' },
					'95%': { borderRadius: '49% 51% 50% 50% / 53% 50% 50% 47%' },
					'100%': { borderRadius: '58% 42% 55% 45% / 52% 48% 52% 48%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '51% 49% 48% 52% / 55% 45% 55% 45%' },
					'5%': { borderRadius: '47% 53% 54% 46% / 49% 52% 48% 51%' },
					'10%': { borderRadius: '54% 46% 50% 50% / 53% 48% 52% 47%' },
					'15%': { borderRadius: '50% 50% 56% 44% / 46% 54% 46% 54%' },
					'20%': { borderRadius: '56% 44% 48% 52% / 52% 47% 53% 48%' },
					'25%': { borderRadius: '48% 52% 53% 47% / 54% 51% 49% 46%' },
					'30%': { borderRadius: '53% 47% 45% 55% / 47% 49% 51% 53%' },
					'35%': { borderRadius: '45% 55% 51% 49% / 51% 46% 54% 49%' },
					'40%': { borderRadius: '51% 49% 49% 51% / 48% 53% 47% 52%' },
					'45%': { borderRadius: '49% 51% 57% 43% / 54% 50% 50% 46%' },
					'50%': { borderRadius: '57% 43% 52% 48% / 50% 48% 52% 50%' },
					'55%': { borderRadius: '52% 48% 46% 54% / 47% 55% 45% 53%' },
					'60%': { borderRadius: '46% 54% 55% 45% / 53% 46% 54% 47%' },
					'65%': { borderRadius: '55% 45% 47% 53% / 49% 52% 48% 51%' },
					'70%': { borderRadius: '47% 53% 52% 48% / 52% 49% 51% 48%' },
					'75%': { borderRadius: '52% 48% 50% 50% / 46% 51% 49% 54%' },
					'80%': { borderRadius: '50% 50% 54% 46% / 51% 47% 53% 49%' },
					'85%': { borderRadius: '54% 46% 49% 51% / 55% 53% 47% 45%' },
					'90%': { borderRadius: '49% 51% 51% 49% / 48% 50% 50% 52%' },
					'95%': { borderRadius: '50% 50% 53% 47% / 52% 54% 46% 48%' },
					'100%': { borderRadius: '51% 49% 48% 52% / 55% 45% 55% 45%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '54% 46% 52% 48% / 48% 54% 46% 52%' },
					'5%': { borderRadius: '48% 52% 47% 53% / 52% 45% 55% 48%' },
					'10%': { borderRadius: '52% 48% 55% 45% / 46% 51% 49% 54%' },
					'15%': { borderRadius: '46% 54% 49% 51% / 54% 48% 52% 46%' },
					'20%': { borderRadius: '55% 45% 51% 49% / 50% 53% 47% 50%' },
					'25%': { borderRadius: '49% 51% 54% 46% / 51% 49% 51% 49%' },
					'30%': { borderRadius: '51% 49% 46% 54% / 49% 52% 48% 51%' },
					'35%': { borderRadius: '54% 46% 50% 50% / 53% 47% 53% 47%' },
					'40%': { borderRadius: '50% 50% 53% 47% / 47% 55% 45% 53%' },
					'45%': { borderRadius: '53% 47% 48% 52% / 55% 46% 54% 45%' },
					'50%': { borderRadius: '48% 52% 56% 44% / 45% 50% 50% 55%' },
					'55%': { borderRadius: '56% 44% 45% 55% / 52% 54% 46% 48%' },
					'60%': { borderRadius: '45% 55% 52% 48% / 48% 47% 53% 52%' },
					'65%': { borderRadius: '52% 48% 50% 50% / 54% 51% 49% 46%' },
					'70%': { borderRadius: '50% 50% 49% 51% / 46% 49% 51% 54%' },
					'75%': { borderRadius: '49% 51% 55% 45% / 51% 53% 47% 49%' },
					'80%': { borderRadius: '55% 45% 47% 53% / 49% 48% 52% 51%' },
					'85%': { borderRadius: '47% 53% 51% 49% / 53% 52% 48% 47%' },
					'90%': { borderRadius: '51% 49% 52% 48% / 47% 46% 54% 53%' },
					'95%': { borderRadius: '52% 48% 48% 52% / 50% 55% 45% 50%' },
					'100%': { borderRadius: '54% 46% 52% 48% / 48% 54% 46% 52%' }
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
				'wave-border-1': 'wave-border-1 18s ease-in-out infinite',
				'wave-border-2': 'wave-border-2 22s ease-in-out infinite',
				'wave-border-3': 'wave-border-3 20s ease-in-out infinite',
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
