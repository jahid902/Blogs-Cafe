/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5fd8bc",
        
"secondary": "#92cc20",
        
"accent": "#315a8e",
        
"neutral": "#2D3239",
        
"base-100": "#E5E9EB",
        
"info": "#4A94D9",
        
"success": "#3EE087",
        
"warning": "#FCC35A",
        
"error": "#EB191D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

