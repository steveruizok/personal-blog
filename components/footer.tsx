import { Footer as F, A, Box, Text } from './theme'

export default function Footer() {
  return (
    <F
      css={{
        py: 4,
        textAlign: 'center',
      }}
    >
      <Text variant="detail">
        Made in London •{' '}
        <A variant="author" href="https://twitter.com/steveruizok">
          Steve Ruiz
        </A>{' '}
        • 2020
      </Text>
    </F>
  )
}
