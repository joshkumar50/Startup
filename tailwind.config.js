/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0f172a',
                    950: '#020617', // Main dark bg
                },
                slate: {
                    50: '#f8fafc',
                    900: '#0f172a',
                    950: '#020617',
                },
                primary: '#0f172a',
                accent: {
                    DEFAULT: '#3b82f6',
                    hover: '#2563eb',
                    muted: '#60a5fa',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
