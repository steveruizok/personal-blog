import { createStyled } from '@stitches/react'

const { styled, css } = createStyled({
  tokens: {
    colors: {
      $primary: 'blue',
      $lightning: 'red',
      $thunder: 'blue',
      $rain: 'yellow',
      $hiContrast: 'hsl(206,10%,5%)',
      $loContrast: 'white',
      $gray100: 'hsl(206,22%,99%)',
      $gray200: 'hsl(206,12%,97%)',
      $gray300: 'hsl(206,11%,92%)',
      $gray400: 'hsl(206,10%,84%)',
      $gray500: 'hsl(206,10%,76%)',
      $gray600: 'hsl(206,10%,44%)',
    },
    lineHeights: {
      $body: '1.8',
      $code: '1.5',
    },
    space: {
      $0: '0px',
      $1: '4px',
      $2: '8px',
      $3: '16px',
      $4: '24px',
      $5: '40px',
      $6: '48px',
      $7: '64px',
      $8: '96px',
      $9: '128px',
    },
    fontSizes: {
      $0: '12px',
      $1: '14px',
      $2: '16px',
      $3: '18px',
      $4: '20px',
      $5: '24px',
      $6: '28px',
      $7: '36px',
      $8: '48px',
      $9: '64px',
    },
    fonts: {
      $body: '"Lora", Georgia, sans-serif',
      $ui:
        "'Fira Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      $heading: '"Lora", Georgia, sans-serif',
      $display: '"Lora", Georgia, sans-serif',
      $monospace: '"Fira Code", Menlo, monospace',
    },
  },
  utils: {
    m: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value: number | string) => ({
      marginTop: value,
    }),
    mr: () => (value: number | string) => ({
      marginRight: value,
    }),
    mb: () => (value: number | string) => ({
      marginBottom: value,
    }),
    ml: () => (value: number | string) => ({
      marginLeft: value,
    }),
    mx: () => (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: () => (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
      padding: value,
    }),
    pt: () => (value: number | string) => ({
      paddingTop: value,
    }),
    pr: () => (value: number | string) => ({
      paddingRight: value,
    }),
    pb: () => (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: () => (value: number | string) => ({
      paddingLeft: value,
    }),
    px: () => (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: () => (value: number | string) => ({
      width: value,
      height: value,
    }),
    bg: () => (value: string) => ({
      background: value,
    }),
  },
})

const lightTheme = css.theme({
  $lightning: 'green',
  $thunder: 'blue',
  $rain: 'yellow',
  $hiContrast: 'hsl(206,2%,93%)',
  $loContrast: 'hsl(206,8%,8%)',

  $gray100: 'hsl(206,8%,12%)',
  $gray200: 'hsl(206,7%,14%)',
  $gray300: 'hsl(206,7%,15%)',
  $gray400: 'hsl(206,7%,24%)',
  $gray500: 'hsl(206,7%,30%)',
  $gray600: 'hsl(206,5%,53%)',
})

const darkTheme = css.theme({
  $lightning: 'red',
  $thunder: 'blue',
  $rain: 'orange',
  $hiContrast: 'hsl(206,2%,93%)',
  $loContrast: 'hsl(206,8%,8%)',

  $gray100: 'hsl(206,8%,12%)',
  $gray200: 'hsl(206,7%,14%)',
  $gray300: 'hsl(206,7%,15%)',
  $gray400: 'hsl(206,7%,24%)',
  $gray500: 'hsl(206,7%,30%)',
  $gray600: 'hsl(206,5%,53%)',
})

// Layout

export const Container = styled('div', {
  maxWidth: 720,
  margin: '0px auto',
})

export const Box = styled('div', {})

export const Flex = styled('div', {
  display: 'flex',
})

export const Grid = styled('div', {
  display: 'grid',
})

export const Nav = styled('nav', {})

export const Footer = styled('footer', {})

// Inputs

export const Button = styled('button', {
  color: '$gray600',
})

// Typography

const heading: any = {
  fontWeight: 'bold',
  font: '$heading',
}

export const Heading1 = styled('h1', { ...heading, font: '$display' })
export const Heading2 = styled('h2', { ...heading })
export const Heading3 = styled('h3', { ...heading })
export const Heading4 = styled('h4', { ...heading })
export const Heading5 = styled('h5', { ...heading })
export const Heading6 = styled('h6', { ...heading })

export const Text = styled('p', {
  variants: {
    type: {
      ui: {
        margin: 0,
        lineHeight: 1,
        fontFamily: '$ui',
      },
      detail: {
        margin: 0,
        lineHeight: 1.5,
        fontSize: '$1',
        font: '$ui',
      },
      default: {
        fontSize: '$2',
        font: '$body',
      },
    },
  },
})

export const Paragraph = styled('p', {
  font: '$body',
  fontSize: '$3',
  lineHeight: '$body',
})

export const A = styled('a', {
  variants: {
    type: {
      heading: {},
      nav: {
        cursor: 'pointer',
        font: '$ui',
        fontSize: '$2',
        py: '$4',
        textDecoration: 'none',
        mr: '$2',
        '&:hover': {
          color: '$primary',
          textDecoration: 'underline',
        },
      },
    },
  },
})

export const Avatar = styled('img', {
  borderRadius: '100%',
  overflow: 'hidden',
  height: 40,
  width: 40,
})

export const Image = styled('img', {
  maxWidth: '100%',
})

export const Divider = styled('hr', {})

export const Blockquote = styled('blockquote', {})

export const Footnote = styled('div', {})

// Code Blocks

export const Pre = styled('pre', {
  font: '$monospace',
  lineHeight: '$code',
  fontSize: '$2',
})

export const Code = styled('code', { font: '$monospace' })

// Tables

export const Table = styled('table', {
  font: '$body',
  fontSize: '$3',
  mt: '$4',
  mb: '$5',
  borderCollapse: 'collapse',
})

export const THead = styled('thead', {
  textAlign: 'left',
  th: { padding: '$3 $4 $3 0', borderBottom: '1px solid $gray600' },
})

export const TR = styled('tr', {})

export const TD = styled('td', { padding: '$3 $4 3 0' })

// Lists

export const OrderedList = styled('ol', {
  fontFamily: '$body',
  fontSize: '$3',
  '& > li': {
    marginTop: '$2',
  },
})

export const UnorderedList = styled('ul', {
  fontFamily: '$body',
  fontSize: '$3',
  '& > li': {
    marginTop: '$2',
  },
})

export { styled, css, lightTheme, darkTheme }
