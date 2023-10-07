/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mydark: {
        
"primary": "#f2e07d",
        
"secondary": "#278407",
        
"accent": "#1bb71b",
        
"neutral": "#222135",
        
"base-100": "#2b2744",
        
"info": "#7eb8f1",
        
"success": "#61e0b8",
        
"warning": "#ab5f07",
        
"error": "#f24073",
        },
  mylight: {
          
      "primary": "#5fe87c",
                   
      "secondary": "#aa70cc",
                   
      "accent": "#efd53e",
                   
      "neutral": "#1d1a2d",
                   
      "base-100": "#f4f3f7",
                   
      "info": "#a5c9f3",
                   
      "success": "#4fd8c2",
                   
      "warning": "#975611",
                   
      "error": "#fb3c46",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
}


