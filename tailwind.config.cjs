/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#00040F",
        "primary-grey": "#3F3E45",
        "primary-green": "#80D6A1",
        "secondary-grey": "#848484",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
