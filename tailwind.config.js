/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: {
        //   100: '#E0E0E0',
        //   200: '#C2C2C2',
        //   300: '#A3A3A3',
        //   400: '#858585',
        //   500: '#666666',
        //   600: '#484848',
        //   700: '#393939',
        //   800: '#2A2A2A',
        //   900: '#272727',
        // },
        // primary: {
        //   100: '#E3F9F0',
        //   200: '#C1F2E5',
        //   300: '#90E6D7',
        //   400: '#6DE0C9',
        //   500: '#14A76C',
        //   600: '#12925E',
        //   700: '#0F7D50',
        //   800: '#0C6942',
        //   900: '#0A5634',
        //   // DEFAULT: "hsl(var(--primary))",
        //   // foreground: "hsl(var(--primary-foreground))",
        // },
        primary: {
          100: '#FFFBEA',
          200: '#FFF3C4',
          300: '#FFE699',
          400: '#FFD666',
          500: '#FAED26',
          600: '#E0D41F',
          700: '#C1B919',
          800: '#A29E13',
          900: '#8A870E',
        },
        background: {
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#484848',
          700: '#393939',
          800: '#2A2A2A',
          900: '#222629',
        },
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
    fontFamily: {
      'montserrat': ['"Montserrat"']
    }
  },
  plugins: [],
}

