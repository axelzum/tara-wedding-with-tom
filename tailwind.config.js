/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
    theme: {
        fontFamily: {
            myriad: ['myriad-pro', 'sans-serif'],
            henriette: ['henriette', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'marble': 'url(\'../public/home/marble-green.jpg\')'
            },
            colors: {
                'tt-green': '#577d6a',
                'tt-gold': '#cd9e35'
            }
        }
    },
    plugins: []
};
