/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // All your React components
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite React components
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'), // Add Flowbite plugin
    ],
};