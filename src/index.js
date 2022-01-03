const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      addUtilities({
        '.heading-1': {
          '@apply text-gray-900 font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight': '',
        },
        '.heading-2': {
          '@apply text-gray-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight': '',
        },
        '.heading-3': {
          '@apply text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl': '',
        },
        '.heading-4': {
          '@apply text-gray-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl': '',
        },
        '.heading-5': {
          '@apply text-gray-900 font-extrabold text-xl sm:text-2xl lg:text-3xl': '',
        },
      })
    })
  ]
}