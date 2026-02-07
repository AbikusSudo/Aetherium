tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cosmic: {
                    950: '#0a0a12',
                    900: '#0f0f1a',
                    800: '#151524',
                    700: '#1e1e35',
                    600: '#2a2a4a',
                    accent: '#a162f7',
                    success: '#10b981',
                    warning: '#f59e0b',
                    danger: '#ef4444'
                },
                nebula: {
                    primary: '#0a0a12',
                    secondary: '#151524',
                    tertiary: '#1e1e35',
                    purple: '#a162f7',
                    pink: '#fb7185',
                    teal: '#34d399',
                    blue: '#60a5fa',
                }
            },
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.3s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2.5s infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(4px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                },
                glow: {
                    'from': { boxShadow: '0 0 10px rgba(161, 98, 247, 0.5)' },
                    'to': { boxShadow: '0 0 20px rgba(161, 98, 247, 0.8), 0 0 30px rgba(161, 98, 247, 0.4)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200px 0' },
                    '100%': { backgroundPosition: 'calc(200px + 100%) 0' }
                }
            }
        }
    }
}
