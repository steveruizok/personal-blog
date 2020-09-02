// @jsx jsx
import { jsx, Heading, Link as A } from 'theme-ui'
import Link from 'next/link'

export default function HeadingLink(props: {
  id: string
  children: React.ReactNode
  as: React.ElementType<any>
}) {
  return (
    <Link href={`#${props.id}`}>
      <A variant="heading">{jsx(props.as, props)}</A>
    </Link>
  )
}
