/**
 * Style Dictionary — @trx/ui-common
 *
 * Gera CSS custom properties a partir dos tokens primitivos em src/tokens/primitive.json.
 * O output vai para dist/tokens/tokens.css (publicado junto com o pacote).
 *
 * Uso: npm run tokens
 */

import StyleDictionary from 'style-dictionary'
import { mkdirSync } from 'fs'

mkdirSync('dist/tokens', { recursive: true })

const sd = new StyleDictionary({
  source: ['src/tokens/primitive.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'trx',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'primitive.js',
          format: 'javascript/esm',
        },
      ],
    },
  },
})

await sd.buildAllPlatforms()
console.log('\n✅ Design tokens gerados em dist/tokens/')
