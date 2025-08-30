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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// NeuroActivo Brand Colors
				'neuro-orange': {
					DEFAULT: 'hsl(var(--neuro-orange))',
					light: 'hsl(var(--neuro-orange-light))',
					dark: 'hsl(var(--neuro-orange-dark))',
				},
				'neuro-green': {
					DEFAULT: 'hsl(var(--neuro-green))',
					light: 'hsl(var(--neuro-green-light))',
					dark: 'hsl(var(--neuro-green-dark))',
				},
				'neuro-blue': 'hsl(var(--neuro-blue))',
				'neuro-gray': {
					light: 'hsl(var(--neuro-gray-light))',
					DEFAULT: 'hsl(var(--neuro-gray))',
					dark: 'hsl(var(--neuro-gray-dark))',
				},
				
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				// NeuroActivo Custom Animations
				'fadeIn': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slideUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'progressFill': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--progress-width, 27%)'
					}
				},
				'circularProgress': {
					'0%': {
						'stroke-dasharray': '0 100'
					},
					'100%': {
						'stroke-dasharray': 'var(--progress-value, 27) 100'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						'box-shadow': '0 0 5px hsl(var(--primary))'
					},
					'50%': {
						'box-shadow': '0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.8s ease-in-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'progress-fill': 'progressFill 2s ease-out forwards',
				'circular-progress': 'circularProgress 2s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
