import { Footer as F, A, Box, Text } from './stitches'

export default function Footer() {
  return (
    <F
      css={{
        py: 4,
        opacity: 0.7,
        transition: 'all .2s',
        '&:hover': { opacity: 1 },
      }}
    >
      <Text type="detail">
        Made in London
        <br />
        <A href="https://twitter.com/steveruizok">Steve Ruiz</A> 2020
      </Text>
    </F>
  )
}
