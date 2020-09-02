import { A } from './stitches'
import Link from 'next/link'

export default function HeadingLink(props: {
  id: string
  children: React.ReactNode
}) {
  return (
    <Link href={`#${props.id}`}>
      <A type="heading">{props.children}</A>
    </Link>
  )
}
