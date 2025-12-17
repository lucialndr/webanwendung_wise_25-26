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
    extend: {},
  },
  plugins: [],
}