const { blackA, green, grass, mauve } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto-Mono", "SFMono-Regular"],
    },
    extend: {
      cursor: {
        custom: "url(./src/assets/cursor.png), default",
        custom_add: "url(./src/assets/cursor-add.png), default",
        custom_hand: "url(./src/assets/cursor-hand.png), default",
        custom_grab: "url(./src/assets/cursor-grab.png), default",
        // pointer: "url(./src/assets/cursor.png), default",
      },
      colors: {
        ...blackA,
        ...green,
        ...grass,
        ...mauve,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
