module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                teko : ["Teko", "sans-serif"],
            },
            height: {
                "1/10": "10%",
                "9/10": "90%",
            },
            backgroundColor: {
                "app-black": "#121212",
                "app-gray":"#313131",
                "app-light-gray":"#949494",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
