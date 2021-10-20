import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"
import { styled } from "~stitches.config"
import { Text } from "~components/text"

interface FigureProps {
  src: string
  alt: string
  title: "string"
  isVideo?: boolean
}

export function Figure({ src, alt, title, isVideo }: FigureProps) {
  const router = useRouter()

  const handleVideoClick = React.useCallback(
    (e: React.MouseEvent<HTMLVideoElement>) => {
      const elm = e.currentTarget
      if (elm.paused) {
        e.currentTarget.play()
      } else {
        e.currentTarget.pause()
      }
    },
    []
  )

  const handleDoubleClick = React.useCallback(() => {
    router.push(src)
  }, [router, src])

  if (isVideo) {
    return (
      <video
        src={src}
        title={title}
        autoPlay
        muted
        playsInline
        onClick={handleVideoClick}
        onDoubleClick={handleDoubleClick}
      />
    )
  }

  return (
    <>
      <ImageWrapper onDoubleClick={handleDoubleClick}>
        <Image
          src={src}
          alt={alt}
          title={title}
          width={720}
          height={400}
          objectFit="contain"
        />
      </ImageWrapper>
      <Text variant="caption">{title}</Text>
    </>
  )
}

const ImageWrapper = styled("span", {
  textAlign: "center",
  display: "block",
  width: "100%",
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
})
