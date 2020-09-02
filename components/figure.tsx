// @jsx jsx
import Link from 'next/link'
import { jsx, Box, Image, Text } from 'theme-ui'

export default function Figure(props: {
  src: string
  alt: string
  title: 'string'
}) {
  return (
    <>
      <Link href={props.src}>
        <span sx={{ textAlign: 'center', display: 'block', mx: [-3, 0] }}>
          <Image variant="article" {...props} sx={{ mt: 4 }} />
        </span>
      </Link>
      <Text
        as="span"
        variant="textStyles.ui"
        sx={{
          display: 'block',
          color: 'secondaryFill',
          mb: 4,
          textAlign: 'center',
        }}
      >
        {props.title}
      </Text>
    </>
  )
}
