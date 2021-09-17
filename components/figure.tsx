import Link from "next/link"
import { useRouter } from "next/router"
import { Image, Span, A } from "./theme"

export default function Figure(props: {
  src: string
  alt: string
  title: "string"
  isVideo?: boolean
}) {
  const router = useRouter()

  return (
    <>
      {props.isVideo ? (
        <>
          <video
            {...props}
            autoPlay
            muted
            playsInline
            onClick={(e) => {
              const elm = e.currentTarget
              if (elm.paused) {
                e.currentTarget.play()
              } else {
                e.currentTarget.pause()
              }
            }}
            onDoubleClick={() => router.push(props.src)}
          />
          <Span variant="caption">{props.title} </Span>
        </>
      ) : (
        <>
          <Span
            css={{
              textAlign: "center",
              display: "block",
              mx: "-$1",
              mt: "$3",
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
            onDoubleClick={() => router.push(props.src)}
          >
            <Image {...props} />
          </Span>
          <Span variant="caption">{props.title}</Span>
        </>
      )}
    </>
  )
}
