import { useRef, useState, useEffect } from 'react'
import useTheme from '../hooks/useTheme'
import { styled } from './core'

/* --------------------- Layout --------------------- */

export const Span = styled('span', {
  variants: {
    variant: {
      caption: {
        margin: '$1',
        lineHeight: 1.3,
        fontSize: '$1',
        fontFamily: '$ui',
        display: 'block',
        mb: '$4',
        textAlign: 'center',
      },
    },
  },
})

export const Container = styled('div', {
  maxWidth: 720,
  margin: '0px auto',
  p: '$1',
  sm: {
    p: '$2',
  },
  md: {
    p: '$3',
  },
  lg: {
    p: '$4',
  },
  '& sup > a': {
    fontSize: '$0',
    p: 2,
    textDecoration: 'none',
  },
  '& .footnotes > ol': {
    p: 0,
    ml: '$1',
  },
  '& .footnotes .footnote-backref': {
    ml: '$0',
  },
  '& .footnotes *': {
    fontSize: '$1',
    lineHeight: 1.32,
  },
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

export const Divider = styled('hr', {
  my: '$5',
  mx: '$3',
  border: 'none',
  borderTop: '1px solid $muted',
})

export const Blockquote = styled('blockquote', {
  borderLeft: '2px solid $hover',
  py: '$0',
  pr: '$1',
  pl: '$3',
  m: 0,
  md: {
    py: '$1',
    pr: '$2',
    pl: '$3',
  },
  opacity: 0.78,
})

export const CodeBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  bg: '$codeBg',
  color: '$text',
  my: '$3',
  mx: '-$1',
  px: '$1',
  py: '$2',
  sm: {
    borderRadius: 4,
    mx: '-$1',
    px: '$1',
    py: '$2',
  },
  md: {
    mx: '-$2',
    p: '$2',
  },
  lg: {
    mx: '-$3',
    p: '$3',
  },
  '&:after': {
    fontFamily: '$ui',
    fontSize: '$0',
    color: '$text',
    content: "'Interactive'",
    position: 'absolute',
    opacity: 0.3,
    top: 8,
    right: 12,
  },
})

export const Footnotes = styled('div', {})

/* --------------------- Inputs --------------------- */

export const Button = styled('button', {
  color: '$gray600',
})

/* ------------------- Typography ------------------- */

const heading: any = {
  fontWeight: 'bold',
  mt: '$4',
  mb: '$2',
  font: '$heading',
}

export const Heading1 = styled('h1', {
  ...heading,
  font: '$display',
  fontSize: '$5',
  mb: '$1',
})
export const Heading2 = styled('h2', { ...heading, fontSize: '$5' })
export const Heading3 = styled('h3', { ...heading, fontSize: '$4' })
export const Heading4 = styled('h4', { ...heading, fontSize: '$3' })
export const Heading5 = styled('h5', { ...heading, fontSize: '$2' })
export const Heading6 = styled('h6', { ...heading, fontSize: '$1' })

export const Text = styled('p', {
  fontSize: '$2',
  fontWeight: 'normal',
  font: '$body',
  lineHeight: '$body',
  variants: {
    variant: {
      caption: {
        margin: '$1',
        lineHeight: 1.3,
        fontSize: '$1',
        fontFamily: '$ui',
      },
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
  fontSize: '$2',
  lineHeight: '$body',
  fontWeight: 'normal',
  '& code': {
    font: '$monospace',
    fontSize: '$2',
    bg: '$codeBg',
    px: 4,
    borderRadius: 4,
  },
})

export const A = styled('a', {
  cursor: 'pointer',
  color: '$text',
  display: 'relative',
  sm: {
    '&:hover': {
      color: '$accent',
    },
  },
  '& code': {
    font: '$monospace',
    fontSize: '$2',
    bg: '$codeBg',
  },
  variants: {
    variant: {
      author: {
        fontWeight: 'bold',
        color: '$text',
        textDecoration: 'none',
      },
      ghost: {
        textDecoration: 'none',
        color: '$text',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
})

export const BoxLink = styled('a', {
  display: 'block',
  cursor: 'pointer',
  borderRadius: 4,
  color: '$text',
  textDecoration: 'none',
  p: '$1',
  mx: '-$1',
  sm: {
    p: '$1',
    mx: '-$1',
    '&:hover': {
      bg: '$hover',
      color: '$text',
    },
  },
  md: {
    p: '$2',
    mx: '-$2',
  },
  lg: {
    p: '$2',
    mx: '-$2',
  },
})

/* --------------------- Images --------------------- */

export const Avatar = styled('img', {
  borderRadius: '100%',
  overflow: 'hidden',
  height: 40,
  width: 40,
})

export const Image = styled('img', {
  maxWidth: '100%',
  height: 'auto',
  color: '$text',
  borderRadius: 4,
})

/* ------------------- Code Blocks ------------------ */

export const Pre = styled('pre', {
  font: '$monospace',
  lineHeight: '$code',
  fontSize: '$1',
  overflowX: 'scroll',
  bg: '$codeBg',
  my: '$3',
  mx: '-$1',
  px: '$1',
  py: '$2',
  sm: {
    borderRadius: 4,
    mx: '-$1',
    px: '$1',
    py: '$2',
  },
  md: {
    mx: '-$2',
    p: '$2',
  },
  lg: {
    mx: '-$3',
    p: '$3',
  },
})

export const Code = styled('code', { font: '$monospace' })

/* --------------------- Tables --------------------- */

export const Table = styled('table', {
  font: '$body',
  fontSize: '$2',
  mt: '$2',
  mb: '$4',
  borderCollapse: 'collapse',
  '& code': {
    font: '$monospace',
    fontSize: '$2',
    bg: '$codeBg',
  },
})

export const THead = styled('thead', {
  textAlign: 'left',
  th: { padding: '$1 $3 $1 0', borderBottom: '1px solid $gray600' },
})

export const TR = styled('tr', {})

export const TD = styled('td', { padding: '$2 $3 0 0' })

/* ---------------------- Lists --------------------- */

export const OrderedList = styled('ol', {
  fontFamily: '$body',
  fontSize: '$2',
  display: 'grid',
  gap: '$1',
})

export const UnorderedList = styled('ul', {
  fontFamily: '$body',
  fontSize: '$2',
  display: 'grid',
  gap: '$1',
  '& code': {
    font: '$monospace',
    fontSize: '$2',
    bg: '$codeBg',
  },
})

export function CodeSandbox({
  url,
  height = 500,
}: {
  url: string
  height?: number
}) {
  const { current } = useTheme()

  return (
    <CodeBox>
      <iframe
        src={`https://codesandbox.io/embed/${url}?fontsize=14&hidenavigation=1&theme=${
          current === 'light' ? 'light' : 'dark'
        }`}
        style={{
          width: '100%',
          height,
          border: 'none',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title={url}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </CodeBox>
  )
}
