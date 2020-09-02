import Link from 'next/link'
import { Image, Text } from './stitches'

export default function Figure(props: {
  src: string
  alt: string
  title: 'string'
}) {
  return (
    <>
      <Link href={props.src}>
        <Text css={{ textAlign: 'center', display: 'block' }}>
          <Image {...props} css={{ mt: '$4' }} />
        </Text>
      </Link>
      <Text
        type="ui"
        css={{
          display: 'block',
          color: 'secondaryFill',
          mb: '$4',
          textAlign: 'center',
        }}
      >
        {props.title}
      </Text>
    </>
  )
}
