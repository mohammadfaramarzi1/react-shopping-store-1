/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem"
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        DosisBold: "Dosis Bold",
        DosisMedium: "Dosis Medium",
        DisisSemiBold: "Dosis SemiBold",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
