/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
          100: 'rgb(227, 251, 239)',
          200: 'rgb(193, 247, 223)',
          300: 'rgb(144, 243, 201)',
          400: 'rgb(109, 224, 179)',
          500: 'rgb(1, 212, 73)',
          600: 'rgb(1, 176, 62)',
          700: 'rgb(1, 140, 51)',
          800: 'rgb(1, 104, 40)',
          900: 'rgb(1, 74, 30)',
          950: 'rgb(1, 50, 20)',
        },
        background: {
          100: 'rgb(224, 224, 224)',
          200: 'rgb(194, 194, 194)',
          300: 'rgb(163, 163, 163)',
          400: 'rgb(133, 133, 133)',
          500: 'rgb(102, 102, 102)',
          600: 'rgb(72, 72, 72)',
          700: 'rgb(57, 57, 57)',
          800: 'rgb(42, 42, 42)',
          900: 'rgb(10, 10, 10)',
          950: 'rgb(0, 0, 0)',
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

