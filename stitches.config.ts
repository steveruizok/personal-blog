import { createStitches } from "@stitches/react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      hover: "rgba(11, 153, 234, .1)",
      muted: "rgba(144, 144, 144, .1)",
      background: "#ffffff",
      surface: "#eeeeee",
      text: "#000000",
      codeBg: "#f9f9fa",
      codeText: "#1c2024",
      codeSelectionText: "#263238",
      codeSelectionBg: "#cceae7",
      syntaxOperator: "#d63a4a",
      syntaxPunctuation: "#444a40",
      syntaxVariable: "#6f42c1",
      syntaxAltVariable: "#005cc5",
      syntaxKeyword: "#d73a49",
      syntaxAtom: "#005cc5",
      syntaxString: "#22863a",
      syntaxQualifier: "#6f42c1",
      syntaxType: "#d73a49",
      syntaxComment: "#63676a",
      syntaxTag: "#005cc5",
      syntaxAttribute: "#6f42c1",
      syntaxLink: "#032f62",
      syntaxHeader: "#0000ff",
    },
    lineHeights: {
      body: "1.7",
      code: "1.55",
    },
    space: {
      0: "8px",
      1: "16px",
      2: "24px",
      3: "32px",
      4: "40px",
      5: "48px",
      6: "64px",
      7: "80px",
      8: "96px",
      9: "128px",
    },
    fontSizes: {
      0: "14px",
      code: "15px",
      1: "16px",
      2: "18px",
      3: "20px",
      4: "24px",
      5: "28px",
    },
    fonts: {
      body: "'Fira Sans', system-ui, sans-serif",
      ui: "'Fira Sans', system-ui, sans-serif",
      heading: '"Fira Sans", system-ui, sans-serif',
      display: '"Fira Sans", system-ui, sans-serif',
      monospace: '"Fira Code", Menlo, monospace',
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
  },
  utils: {
    m: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
      padding: value,
    }),
    pt: (value: number | string) => ({
      paddingTop: value,
    }),
    pr: (value: number | string) => ({
      paddingRight: value,
    }),
    pb: (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: (value: number | string) => ({
      paddingLeft: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: number | string) => ({
      width: value,
      height: value,
    }),
    bg: (value: string) => ({
      backgroundColor: value,
    }),
    fadeBg: (value: number) => ({
      transition: `background-color ${value}s`,
    }),
  },
})

export const lightTheme = createTheme({})

export const dimTheme = createTheme({
  colors: {
    background: "#2c2b33",
    text: "#f9f9f5",
    surface: "#37363d",
    codeBg: "#232229",
    codeText: "#d1d5da",
    codeSelectionText: "#eeeeee",
    codeSelectionBg: "#363636",
    syntaxOperator: "#d1d5da",
    syntaxPunctuation: "#79b8ff",
    syntaxVariable: "#b392f0",
    syntaxAltVariable: "#79b8ff",
    syntaxKeyword: "#f97583",
    syntaxAtom: "#79b8ff",
    syntaxString: "#ffab70",
    syntaxQualifier: "#b392f0",
    syntaxType: "#f97583",
    syntaxComment: "#959da5",
    syntaxTag: "#34d058",
    syntaxAttribute: "#b392f0",
    syntaxLink: "#79b8ff",
    syntaxHeader: "#f97583",
  },
})

export const darkTheme = createTheme({
  colors: {
    hover: "rgba(11, 153, 234, .14)",
    muted: "rgba(144, 144, 144, .14)",
    background: "#010101",
    text: "#d9d9d9",
    surface: "#242222",
    codeBg: "#141414",
    codeText: "#d1d5da",
    codeSelectionText: "#eeeeee",
    codeSelectionBg: "#363636",
    syntaxOperator: "#d1d5da",
    syntaxPunctuation: "#79b8ff",
    syntaxVariable: "#b392f0",
    syntaxAltVariable: "#79b8ff",
    syntaxKeyword: "#f97583",
    syntaxAtom: "#79b8ff",
    syntaxString: "#ffab70",
    syntaxQualifier: "#b392f0",
    syntaxType: "#f97583",
    syntaxComment: "#959da5",
    syntaxTag: "#34d058",
    syntaxAttribute: "#b392f0",
    syntaxLink: "#79b8ff",
    syntaxHeader: "#f97583",
  },
})

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "$background",
    color: "$text",
    padding: 0,
    margin: 0,
    fontSize: "$body",
    fontFamily: "$body",
  },
  video: {
    maxWidth: "100%",
    height: "auto",
    color: "$text",
    borderRadius: 4,
  },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "bold",
    mt: "$4",
    mb: "$2",
    fontFamily: "$heading",
  },
  h1: {
    fontFamily: "$display",
    fontSize: "$5",
    mb: "$1",
  },
  h2: { fontSize: "$5" },
  h3: { fontSize: "$4" },
  h4: { fontSize: "$3" },
  h5: { fontSize: "$2" },
  h6: { fontSize: "$1" },
  p: {
    fontFamily: "$body",
    fontSize: "$2",
    lineHeight: "$body",
    fontWeight: "normal",
    "& code": {
      fontFamily: "$monospace",
      fontSize: "$1",
      bg: "$codeBg",
      px: 4,
      borderRadius: 4,
    },
  },
  a: {
    cursor: "pointer",
    color: "$text",
    display: "relative",
    sm: {
      "&:hover": {
        color: "$accent",
      },
    },
    "& code": {
      fontFamily: "$monospace",
      fontSize: "$2",
      bg: "$codeBg",
    },
  },
  ol: {
    fontFamily: "$body",
    fontSize: "$2",
    display: "grid",
    gap: "$1",
    "& code": {
      fontFamily: "$monospace",
      fontSize: "$2",
      bg: "$codeBg",
    },
  },
  ul: {
    fontFamily: "$body",
    fontSize: "$2",
    display: "grid",
    gap: "$1",
  },
  li: {
    lineHeight: "$body",
  },
  code: { fontFamily: "$monospace" },
  pre: {
    fontFamily: "$monospace",
    lineHeight: "$code",
    fontSize: "$1",
    overflowX: "scroll",
    bg: "$codeBg",
    my: "$3",
    mx: "-$1",
    px: "$1",
    py: "$2",
    fontWeight: 500,
    sm: {
      borderRadius: 4,
      mx: "-$1",
      px: "$1",
      py: "$2",
    },
    md: {
      mx: "-$2",
      p: "$2",
    },
    lg: {
      mx: "-$3",
      p: "$3",
    },
  },
  table: {
    fontFamily: "$body",
    fontSize: "$2",
    mt: "$2",
    mb: "$4",
    borderCollapse: "collapse",
    "& code": {
      fontFamily: "$monospace",
      fontSize: "$2",
      bg: "$codeBg",
    },
  },
  td: { padding: "$2 $3 0 0" },
  thead: {
    textAlign: "left",
    th: { padding: "$1 $3 $1 0", borderBottom: "1px solid $gray600" },
  },
  blockquote: {
    borderLeft: "2px solid $hover",
    py: "$0",
    pr: "$1",
    pl: "$3",
    m: 0,
    md: {
      py: "$1",
      pr: "$2",
      pl: "$3",
    },
    opacity: 0.78,
  },
  hr: {
    my: "$5",
    mx: "$3",
    border: "none",
    borderTop: "1px solid $muted",
  },
  "pre[class*='language-']": {
    fontSize: "$code",
    backgroundColor: "$codeBg",
    color: "$codeText",
  },
  ".token.number": {
    color: "$syntaxAtom",
  },
  ".token.attr-name,.attribute": {
    color: "$syntaxAttribute",
  },
  ".token.attr-value,.pseudo-element,.pseudo-class,.string": {
    color: "$syntaxString",
  },
  ".token.atrule,.boolean,.constant,.hexcode,.id,.important,.keyword,.symbol": {
    color: "$syntaxKeyword",
  },
  ".token.hexcode,.unit,.cdata,.class,.inserted,.interpolation-punctuation": {
    color: "$syntaxAltVariable",
  },
  ".token.regex,.function,.class-name,.method,.variable,.maybe-class-name": {
    color: "$syntaxAltVariable",
  },
  ".token.comment,.doctype,.prolog": {
    color: "$syntaxComment",
  },
  ".token.deleted,.entity,.url,.selector,.type": {
    color: "$syntaxVariable",
  },
  ".token > .tag, .token.tag > .punctuation": {
    color: "$syntaxTag",
  },
  ".token.punctuation": {
    color: "$syntaxPunctuation",
  },
  ".token.operator": {
    color: "$syntaxOperator",
  },
  ".token.builtin": {
    color: "$syntaxLink",
  },
})
