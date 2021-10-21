import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"
import { styled } from "~stitches.config"
import { Text } from "~components/text"

interface FigureProps {
  src: string
  alt: string
  title: string
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
      <Text variant="caption" css={{ mb: "$5", textAlign: "center" }}>
        {title}
      </Text>
    </>
  )
}

const ImageWrapper = styled("div", {
  position: "relative",
  textAlign: "center",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "$3",
  backgroundColor: "#F8FAFA",
})
