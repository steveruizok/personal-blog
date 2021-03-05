import { useRef, useEffect, useState } from "react"
import useTheme from "./hooks/useTheme"
import { styled, Span } from "./theme"

const OuterWrapper = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "hidden",
  my: "$5",
  height: `min(720px, 61vh)`,
  minHeight: `min(720px, 61vh)`,
  maxHeight: `min(720px, 61vh)`,
})

const InnerWrapper = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  overflow: "hidden",
  m: 0,
  p: 0,
})

const ScreenshotImage = styled.a({
  position: "absolute",
  zIndex: 0,
  visibility: "hidden",
  "& > img": {
    overflow: "hidden",
    position: "relative",
  },
  "& > video": {
    position: "relative",
  },
})

const DeviceImage = styled.div({
  position: "relative",
  width: "100%",
  maxHeight: "710px",
  height: "61vh",
  pointerEvents: "none",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  variants: {
    mode: {
      dim: {
        position: "absolute",
        top: 0,
        left: 0,
        background: `url(/site/iphone-frame.png)`,
      },
      dark: {
        position: "absolute",
        top: 0,
        left: 0,
        background: `url(/site/iphone-frame.png)`,
      },
      light: {
        position: "absolute",
        top: 0,
        left: 0,
        background: `url(/site/iphone-frame-light.png)`,
      },
      background: {
        background: `url(/site/iphone-frame-bg.png)`,
      },
    },
  },
})

const captionCSS = { mt: "-$2" }

type Props = {
  src: string
  caption: string
  title: string
  alt: string
  start?: number
  end?: number
}

export default function Screenshot({
  src = "",
  caption = "",
  title = "",
  alt = "",
  start = 0,
  end = 1,
}: Props) {
  const rDeviceImage = useRef<HTMLImageElement>()
  const rDeviceBgImage = useRef<HTMLImageElement>()
  const rSource = useRef<HTMLVideoElement | HTMLImageElement>()
  const isVideo = src.endsWith("mp4")
  const { current } = useTheme()

  console.log(current)

  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    function handleResize() {
      const deviceImage = rDeviceImage.current
      const deviceBgImage = rDeviceBgImage.current
      const source = rSource.current
      if (!(source && deviceImage)) return

      const rect = deviceImage.getBoundingClientRect()

      source.height = rect.height * 0.95
      source.style.top = rect.height * (0.025 - start) + "px"
      deviceImage.style.top = rect.height * -start + "px"
      deviceBgImage.style.top = rect.height * -start + "px"
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  useEffect(() => {
    const source = rSource.current
    if (!source) return

    const maybeVideo = source as HTMLVideoElement
    if (maybeVideo.play !== undefined) maybeVideo.play()

    setIsHidden(false)
  }, [current])

  return (
    <OuterWrapper
      style={{
        height: `calc(${end - start} * min(720px, 61vh))`,
        minHeight: `calc(${end - start} * min(720px, 61vh))`,
        maxHeight: `calc(${end - start} * min(720px, 61vh))`,
      }}
    >
      <InnerWrapper
        style={{
          pointerEvents: "all",
        }}
      >
        <DeviceImage ref={rDeviceBgImage} mode={"background"} />
        <ScreenshotImage
          aria-label={`Image: ${title}`}
          title={title}
          href={src}
          style={{ visibility: isHidden ? "hidden" : "visible" }}
        >
          {isVideo ? (
            <>
              <video
                ref={rSource as React.MutableRefObject<HTMLVideoElement>}
                title={title}
                autoPlay
                playsInline
                muted
                loop
                controls={false}
              >
                <source src={src + "?playsinline=1"} type="video/mp4" />
              </video>
            </>
          ) : (
            <img
              ref={rSource as React.MutableRefObject<HTMLImageElement>}
              title={title}
              alt={alt}
              src={src}
            />
          )}
        </ScreenshotImage>
        <DeviceImage ref={rDeviceImage} mode={current} />
      </InnerWrapper>
    </OuterWrapper>
  )
}
