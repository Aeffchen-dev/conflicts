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
					'0%': { borderRadius: '65% 35% 60% 40% / 55% 45% 55% 45%' },
					'50%': { borderRadius: '40% 60% 45% 55% / 60% 50% 50% 40%' },
					'100%': { borderRadius: '65% 35% 60% 40% / 55% 45% 55% 45%' }
				},
				'wave-border-2': {
					'0%': { borderRadius: '45% 55% 50% 50% / 65% 40% 60% 35%' },
					'50%': { borderRadius: '55% 45% 60% 40% / 35% 65% 40% 60%' },
					'100%': { borderRadius: '45% 55% 50% 50% / 65% 40% 60% 35%' }
				},
				'wave-border-3': {
					'0%': { borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' },
					'50%': { borderRadius: '45% 55% 40% 60% / 55% 40% 60% 45%' },
					'100%': { borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%' }
				},
				'wave-border-4': {
					'0%': { borderRadius: '50% 50% 65% 35% / 45% 60% 40% 55%' },
					'50%': { borderRadius: '60% 40% 35% 65% / 55% 35% 65% 45%' },
					'100%': { borderRadius: '50% 50% 65% 35% / 45% 60% 40% 55%' }
				},
				'wave-border-5': {
					'0%': { borderRadius: '55% 45% 45% 55% / 60% 50% 50% 40%' },
					'50%': { borderRadius: '45% 55% 55% 45% / 40% 60% 40% 60%' },
					'100%': { borderRadius: '55% 45% 45% 55% / 60% 50% 50% 40%' }
				},
				'wave-border-6': {
					'0%': { borderRadius: '40% 60% 60% 40% / 55% 45% 55% 45%' },
					'50%': { borderRadius: '60% 40% 40% 60% / 45% 55% 45% 55%' },
					'100%': { borderRadius: '40% 60% 60% 40% / 55% 45% 55% 45%' }
				},
				'wave-border-7': {
					'0%': { borderRadius: '65% 35% 50% 50% / 50% 60% 40% 50%' },
					'50%': { borderRadius: '35% 65% 50% 50% / 60% 40% 60% 40%' },
					'100%': { borderRadius: '65% 35% 50% 50% / 50% 60% 40% 50%' }
				},
				'wave-border-8': {
					'0%': { borderRadius: '50% 50% 60% 40% / 65% 45% 55% 35%' },
					'50%': { borderRadius: '50% 50% 40% 60% / 35% 65% 35% 65%' },
					'100%': { borderRadius: '50% 50% 60% 40% / 65% 45% 55% 35%' }
				},
				'wave-border-9': {
					'0%': { borderRadius: '55% 45% 65% 35% / 40% 55% 45% 60%' },
					'50%': { borderRadius: '45% 55% 35% 65% / 60% 40% 60% 40%' },
					'100%': { borderRadius: '55% 45% 65% 35% / 40% 55% 45% 60%' }
				},
				'wave-border-10': {
					'0%': { borderRadius: '60% 40% 45% 55% / 55% 50% 50% 45%' },
					'50%': { borderRadius: '40% 60% 55% 45% / 45% 60% 40% 55%' },
					'100%': { borderRadius: '60% 40% 45% 55% / 55% 50% 50% 45%' }
				},
				'wave-border-11': {
					'0%': { borderRadius: '45% 55% 55% 45% / 65% 40% 60% 35%' },
					'50%': { borderRadius: '55% 45% 45% 55% / 35% 65% 35% 65%' },
					'100%': { borderRadius: '45% 55% 55% 45% / 65% 40% 60% 35%' }
				},
				'wave-border-12': {
					'0%': { borderRadius: '65% 35% 40% 60% / 50% 55% 45% 50%' },
					'50%': { borderRadius: '35% 65% 60% 40% / 55% 45% 55% 45%' },
					'100%': { borderRadius: '65% 35% 40% 60% / 50% 55% 45% 50%' }
				},
				'wave-border-13': {
					'0%': { borderRadius: '50% 50% 55% 45% / 60% 45% 55% 40%' },
					'50%': { borderRadius: '50% 50% 45% 55% / 40% 60% 40% 60%' },
					'100%': { borderRadius: '50% 50% 55% 45% / 60% 45% 55% 40%' }
				},
				'wave-border-14': {
					'0%': { borderRadius: '40% 60% 65% 35% / 45% 60% 40% 55%' },
					'50%': { borderRadius: '60% 40% 35% 65% / 60% 35% 65% 40%' },
					'100%': { borderRadius: '40% 60% 65% 35% / 45% 60% 40% 55%' }
				},
				'wave-border-15': {
					'0%': { borderRadius: '55% 45% 50% 50% / 55% 50% 50% 45%' },
					'50%': { borderRadius: '45% 55% 50% 50% / 45% 60% 40% 55%' },
					'100%': { borderRadius: '55% 45% 50% 50% / 55% 50% 50% 45%' }
				},
				'wave-border-16': {
					'0%': { borderRadius: '50% 50% 40% 60% / 65% 35% 65% 35%' },
					'50%': { borderRadius: '50% 50% 60% 40% / 35% 65% 35% 65%' },
					'100%': { borderRadius: '50% 50% 40% 60% / 65% 35% 65% 35%' }
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
				'wave-border-1': 'wave-border-1 28s ease-in-out infinite',
				'wave-border-2': 'wave-border-2 32s ease-in-out infinite',
				'wave-border-3': 'wave-border-3 30s ease-in-out infinite',
				'wave-border-4': 'wave-border-4 35s ease-in-out infinite',
				'wave-border-5': 'wave-border-5 29s ease-in-out infinite',
				'wave-border-6': 'wave-border-6 33s ease-in-out infinite',
				'wave-border-7': 'wave-border-7 31s ease-in-out infinite',
				'wave-border-8': 'wave-border-8 36s ease-in-out infinite',
				'wave-border-9': 'wave-border-9 27s ease-in-out infinite',
				'wave-border-10': 'wave-border-10 34s ease-in-out infinite',
				'wave-border-11': 'wave-border-11 30s ease-in-out infinite',
				'wave-border-12': 'wave-border-12 32s ease-in-out infinite',
				'wave-border-13': 'wave-border-13 29s ease-in-out infinite',
				'wave-border-14': 'wave-border-14 35s ease-in-out infinite',
				'wave-border-15': 'wave-border-15 31s ease-in-out infinite',
				'wave-border-16': 'wave-border-16 33s ease-in-out infinite',
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
