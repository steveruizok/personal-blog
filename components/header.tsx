// @jsx jsx
import { jsx } from 'theme-ui'

export default function Header() {
  return (
    <header style={{ display: 'flex', gap: 12 }}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </header>
  )
}
