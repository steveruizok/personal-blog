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
      $syntaxOperator: '#d63a4a',
      $syntaxPunctuation: '#333a40',
      $syntaxVariable: '#6f42c1',
      $syntaxAltVariable: '#005cc5',
      $syntaxKeyword: '#d73a49',
      $syntaxAtom: '#005cc5',
      $syntaxString: '#22863a',
      $syntaxQualifier: '#6f42c1',
      $syntaxType: '#d73a49',
      $syntaxComment: '#6a737d',
      $syntaxTag: '#005cc5',
      $syntaxAttribute: '#6f42c1',
      $syntaxLink: '#032f62',
      $syntaxHeader: '#0000ff',
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
  $syntaxOperator: '#d63a4a',
  $syntaxPunctuation: '#333a40',
  $syntaxVariable: '#6f42c1',
  $syntaxAltVariable: '#005cc5',
  $syntaxKeyword: '#d73a49',
  $syntaxAtom: '#005cc5',
  $syntaxString: '#22863a',
  $syntaxQualifier: '#6f42c1',
  $syntaxType: '#d73a49',
  $syntaxComment: '#6a737d',
  $syntaxTag: '#005cc5',
  $syntaxAttribute: '#6f42c1',
  $syntaxLink: '#032f62',
  $syntaxHeader: '#0000ff',
})

const darkTheme = css.theme({
  $background: '#010101',
  $text: '#ffffff',
  $codeBg: '#141414',
  $codeText: '#d1d5da',
  $codeSelectionText: '#eeeeee',
  $codeSelectionBg: '#363636',
  $syntaxOperator: '#d1d5da',
  $syntaxPunctuation: '#79b8ff',
  $syntaxVariable: '#b392f0',
  $syntaxAltVariable: '#79b8ff',
  $syntaxKeyword: '#f97583',
  $syntaxAtom: '#79b8ff',
  $syntaxString: '#ffab70',
  $syntaxQualifier: '#b392f0',
  $syntaxType: '#f97583',
  $syntaxComment: '#959da5',
  $syntaxTag: '#34d058',
  $syntaxAttribute: '#b392f0',
  $syntaxLink: '#79b8ff',
  $syntaxHeader: '#f97583',
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
  '.token .number': {
    color: '$syntaxAtom',
  },
  '.token .attr-name,.attribute': {
    color: '$syntaxAttribute',
  },
  '.token .attr-value,.pseudo-element,.pseudo-class,.string': {
    color: '$syntaxString',
  },
  '.token .atrule,.boolean,.constant,.hexcode,.id,.important,.keyword,.symbol': {
    color: '$syntaxKeyword',
  },
  '.token .hexcode,.unit.builtin,.cdata,.class,.inserted,.interpolation-punctuation': {
    color: '$syntaxAltVariable',
  },
  '.token .regex,.function,.method,.variable': {
    color: '$syntaxAltVariable',
  },
  '.token .comment,.doctype,.prolog': {
    color: '$syntaxComment',
  },
  '.token .deleted,.entity,.url,.selector,.maybe-class-name': {
    color: '$syntaxVariable',
  },
  '.token > .tag, .token.tag > .punctuation': {
    color: '$syntaxTag',
  },
  '.token.punctuation': {
    color: '$syntaxPunctuation',
  },
  '.token.operator': {
    color: '$syntaxOperator',
  },
})

export { styled, css, lightTheme, darkTheme }
