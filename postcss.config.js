const purgecss = require('@fullhuman/postcss-purgecss')

// define extractor class
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
    purgecss({
      content: ['./**/*.twig'],
      whitelistPatterns: [
        /^.*plyr|label|icon.*$/
      ],
      whitelist: [
        'is-hidden',
        'is-disabled',
        'is-active',
        'bg-cover',
        'bg-center',
        'bg-no-repeat',
        'transition',
        'duration-700',
        'ease-in-out',
        'hidden',
        'z-10',
        'flex',
        'justify-center',
        'items-center',
        'video-placeholder',
        'bullet',
        'absolute',
        'right-0',
        'top-0',
        'left-0',
        'bottom-0',
        'border-solid',
        'border-2',
        'border-blue-400',
        'p-8',
        'mt-12',
        'mr-12',
        'wysiwyg',
        'relative',
        'bg-blue-100',
        'px-20',
        'py-48',
        'md:px-40',
        'md:py-40'
      ],
      extractors: [{
        extractor: TailwindExtractor,
        extensions: ['twig']
      }]
    })
  ]
}
