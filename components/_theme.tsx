// @ts-ignore
import prismTheme from './prism.json'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
}

const ui = {
  fontFamily: 'ui',
  fontWeight: 'ui',
  lineHeight: 'ui',
}

const body = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  fontSize: [2, 3],
  mt: 3,
  mb: 2,
}

export const theme = {
  useCustomProperties: true,
  colors: {
    text: '#000',
    primaryFill: '#000',
    secondaryFill: '#3d3d3d',
    tertiaryFill: '#a3a3a3',
    background: '#fff',
    primary: 'rgba(78, 4, 252, 1.000)',
    secondary: '#119',
    muted: '#f6f6f6',
    highlight: '#efeffe', // '#ffffcc',
    gray: '#777',
    accent: '#609',
  },
  fonts: {
    ui: "'Fira Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    body: '"Lora", Georgia, sans-serif',
    heading: '"Lora", Georgia, sans-serif',
    monospace: '"Fira Code", Menlo, monospace',
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 72],
  fontSizes: [12, 14, 16, 20, 24, 28, 36, 40, 48, 64, 72],
  fontWeights: {
    ui: 500,
    body: 400,
    heading: 600,
    display: 400,
  },
  lineHeights: {
    ui: 1.5,
    body: 1.75,
    heading: 1.25,
    code: 1.5,
  },
  textStyles: {
    display: {
      fontFamily: 'body',
      fontWeight: 'display',
      letterSpacing: '-0.015em',
      fontSize: [6, 8],
      mt: 3,
    },
    heading: {
      ...heading,
      mt: 5,
      mb: 3,
    },
    ui: {
      ...ui,
      fontSize: 2,
    },
    detail: {
      fontSize: 2,
      lineHeight: 1.2,
      fontFamily: 'ui',
    },
  },
  layout: {
    container: {
      p: 3,
      maxWidth: 720,
    },
  },
  styles: {
    root: {
      ...body,
    },
    a: {
      color: 'primary',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontWeight: 500,
      p: 3,
      my: 4,
      mx: [-3, 0],
      borderRadius: [0, 4],
      overflow: 'auto',
      ...prismTheme,
      fontSize: 2,
      lineHeight: 'code',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'text',
      px: 1,
      bg: 'muted',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      mx: 0,
      px: 4,
      borderLeft: '2px solid',
      borderColor: 'tertiaryFill',
    },
    h1: {
      variant: 'textStyles.heading',
      letterSpacing: '-0.01em',
      fontSize: [5, 6],
    },
    h2: {
      variant: 'textStyles.heading',
      letterSpacing: '-0.01em',
      fontSize: [4, 5],
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: [3, 4],
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: [2, 3],
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: [2, 3],
      fontFamily: 'ui',
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: [1, 2],
      fontFamily: 'ui',
    },
  },
  links: {
    nav: {
      cursor: 'pointer',
      fontFamily: 'ui',
      fontWeight: 'ui',
      fontSize: 2,
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
        textDecoration: 'underline',
      },
    },
    heading: {
      cursor: 'pointer',
      '&:hover': {
        color: 'primary',
        '&::before': {
          display: 'inline-block',
          content: '" "',
          ml: ['-24px', '-20px'],
          mr: ['8px', '4px'],
          position: 'relative',
          backgroundImage: 'url("/icons/link.svg")',
          backgroundSize: '16px',
          height: '16px',
          width: '16px',
          opacity: [0, 1],
          color: 'primary',
        },
      },
    },
  },
  images: {
    avatar: {
      borderRadius: 6,
      bg: 'muted',
      height: 40,
      width: 40,
    },
    article: {
      maxWidth: '100%',
      width: ['auto', 'auto'],
      maxHeight: '500px',
      borderRadius: [0, 4],
      cursor: 'pointer',
      transition: 'all .2s',
      '&:hover': {
        filter: 'brightness(1.1)',
      },
    },
  },
  figure: {
    my: 4,
  },
  figureCaption: {
    fontSize: 1,
    textAlign: 'center',
  },
}

export default theme
