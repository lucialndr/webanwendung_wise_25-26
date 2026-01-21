import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.{vue,js,ts}",
    "./app/pages/**/*.{vue,js,ts}",
    "./app/app.vue",
    "./app/plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F0',
        foreground: '#1a3a47',
        primary: '#2C6B7F',
        'primary-foreground': '#ffffff',
        secondary: '#E8F4F8',
        'secondary-foreground': '#1a3a47',
        accent: '#D4EBF2',
        'accent-foreground': '#1a3a47',
        muted: '#E8E4D9',
        'muted-foreground': '#5a6f7a',
        border: 'rgba(42, 107, 127, 0.15)',
      },
      fontFamily: {
        sans: ["'DM Sans'", 'system-ui', '-apple-system', 'sans-serif'],
        serif: ["'Playfair Display'", 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}