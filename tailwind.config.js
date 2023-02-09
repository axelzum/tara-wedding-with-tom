/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            myriad: ['myriad-pro', 'sans-serif'],
            fino: ['fino-sans', 'sans-serif'],
            henriette: ['henriette', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'marble': 'url(\'../public/images/navigation/marble-green.jpg\')'
            },
            colors: {
                'tt-green': '#577d6a',
                'tt-gold': '#cd9e35'
            }
        }
    },
    plugins: []
};
