    /** @type {import('tailwindcss').Config} */
    module.exports = {
        layers: ['components'],
        content: ["./src/**/*.{html,js,jsx,css}"],
        theme: {
            extend: {
            colors: { 
                primary: '#6B728E',
                secondary: '#1a7982',
                utama:'#8BD9CA',
                kedua:'#5DA698'
            },
            },
        },
        plugins: [],
        }