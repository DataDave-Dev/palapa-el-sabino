/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal Quinta El Cielo
        'forest': '#2D5016',
        'night': '#0F1E3D',
        'sunset': '#D4A574',
        'bone': '#FAF7F2',

        // Colores adicionales
        'forest-light': '#3A6520',
        'forest-dark': '#1F3A0E',
        'night-light': '#1B2E5C',
        'night-dark': '#0A1429',
        'sunset-light': '#E4B584',
        'sunset-dark': '#C49564',
      },
      fontFamily: {
        'sans': ['"Onest Variable"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['"Onest Variable"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #2D5016 0%, #3A6520 100%)',
        'gradient-night': 'linear-gradient(135deg, #0F1E3D 0%, #1B2E5C 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #D4A574 0%, #E4B584 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(15, 30, 61, 0.8) 0%, rgba(45, 80, 22, 0.6) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}