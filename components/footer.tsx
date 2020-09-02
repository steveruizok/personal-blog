// @jsx jsx
import { jsx, Box, Text } from 'theme-ui'

export default function Footer() {
  return (
    <Box
      as="footer"
      sx={{
        py: 4,
        opacity: 0.7,
        transition: 'all .2s',
        '&:hover': { opacity: 1 },
      }}
    >
      <Text variant="textStyles.ui">
        Made in London
        <br />
        <a href="https://twitter.com/steveruizok">Steve Ruiz</a> 2020
      </Text>
    </Box>
  )
}
