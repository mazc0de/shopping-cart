/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                cartProductCardContainer: "-1px 0px 43px -5px rgba(0,0,0,0.40);",
            },
        },
    },
    plugins: [],
};
