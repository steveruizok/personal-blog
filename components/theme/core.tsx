import { createStyled } from '@stitches/react'
import utils from './utils'

const { styled, css } = createStyled({
  tokens: {
    colors: {
      $background: '#ffffff',
      $text: '#000',
      $hover: 'rgba(11, 153, 234, .1)',
      $muted: 'rgba(144, 144, 144, .1)',
      $accent: '#0e99eb',
      $codeBg: '#fafafa',
      $codeText: '#24292e',
      $codeSelectionText: '#263238',
      $codeSelectionBg: '#cceae7',
      $code0: '#22863a', // strings
      $code1: '#d73a49', // keywords
      $code2: '#005cc5', // numbers
      $code3: '#39adb5', // punctuation
      $code4: '#6f42c1', // class names / entities
      $code5: '#6a737d', // comments
      $code6: '#005cc5', // variables
    },
    lineHeights: {
      $body: '1.62',
      $code: '1.5',
    },
    space: {
      $0: '8px',
      $1: '16px',
      $2: '24px',
      $3: '32px',
      $4: '40px',
      $5: '48px',
      $6: '64px',
      $7: '80px',
      $8: '96px',
      $9: '128px',
    },
    fontSizes: {
      $0: '14px',
      $1: '16px',
      $2: '18px',
      $3: '20px',
      $4: '24px',
      $5: '28px',
    },
    fonts: {
      $body: "'Fira Sans', system-ui, sans-serif",
      $ui: "'Fira Sans', system-ui, sans-serif",
      $heading: '"Fira Sans", system-ui, sans-serif',
      $display: '"Fira Sans", system-ui, sans-serif',
      $monospace: '"Fira Code", Menlo, monospace',
    },
  },
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
  },
  utils,
})

const lightTheme = css.theme({
  $background: '#ffffff',
  $text: '#000000',
  $codeBg: '#fafafa',
  $codeText: '#24292e',
  $codeSelectionText: '#263238',
  $codeSelectionBg: '#cceae7',
  $code0: '#22863a', // strings
  $code1: '#d73a49', // keywords
  $code2: '#005cc5', // numbers
  $code3: '#d73a49', // punctuation
  $code4: '#6f42c1', // class names / entities
  $code5: '#6a737d', // comments
  $code6: '#005cc5', // variables
})

const darkTheme = css.theme({
  $background: '#010101',
  $text: '#ffffff',
  $codeBg: '#1d1d1d',
  $codeText: '#eeeeee',
  $codeSelectionText: '#eeeeee',
  $codeSelectionBg: '#363636',
  $code0: '#a5e844',
  $code1: '#c792ea',
  $code2: '#f2ff00',
  $code3: '#88ddff',
  $code4: '#a5e844',
  $code5: '#616161',
  $code6: '#ff6666',
})

css.global({
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
    transition: 'background-color .16s',
    padding: 0,
    margin: 0,
  },
  "pre[class*='language-']": {
    backgroundColor: '$codeBg',
    color: '$codeText',
  },
  '.token.attr-value,.attribute,.pseudo-element,.pseudo-class,.string': {
    color: '$code0',
  },
  '.token.atrule,.boolean,.constant,.hexcode,.id,.important,.keyword,.symbol': {
    color: '$code1',
  },
  '.token.number,.hexcode,.unit,.property-access': { color: '$code2' },
  '.token.attr-name,.builtin,.cdata,.class,.inserted,.operator,.interpolation-punctuation': {
    color: '$code3',
  },
  '.token.class-name,.regex,.function,.method,.property-access': {
    color: '$code4',
  },
  '.token.comment,.doctype,.prolog': { color: '$code5' },
  '.token.deleted,.entity,.variable,.url,.tag,.selector': { color: '$code6' },
})

export { styled, css, lightTheme, darkTheme }
