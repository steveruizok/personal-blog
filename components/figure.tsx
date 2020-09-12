import Link from "next/link"
import { Image, Span, A } from "./theme"

export default function Figure(props: {
  src: string
  alt: string
  title: "string"
}) {
  return (
    <>
      <Link href={props.src}>
        <A
          css={{
            textAlign: "center",
            display: "block",
            mx: "-$1",
            sm: {
              mx: "-$1",
            },
            md: {
              mx: "-$2",
            },
            lg: {
              mx: "-$2",
            },
          }}
        >
          <Image {...props} css={{ mt: "$3" }} />
        </A>
      </Link>
      <Span variant="caption">{props.title}</Span>
    </>
  )
}
