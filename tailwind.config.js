/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include paths for Jekyll's generated HTML files
    './_site/**/*.html',
    './*.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.html',
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme as needed
      fontFamily: {
        // Example custom fonts
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}