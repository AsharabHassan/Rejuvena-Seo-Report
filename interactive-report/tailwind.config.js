/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sirona-blue': '#22234f',
                'sirona-pink': '#e52c71',
                'sirona-cyan': '#22bae0',
                'sirona-yellow': '#d8d42d',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
